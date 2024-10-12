# Job

A Job resource represents a job posting (also referred to as a \"job listing\" or \"job requisition\"). A job belongs to a Company, which is the hiring entity responsible for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **List[str]** | Optional but strongly recommended for the best service experience. Location(s) where the employer is looking to hire for this job posting. Specifying the full street address(es) of the hiring location enables better API results, especially job searches by commute time. At most 50 locations are allowed for best search performance. If a job has more locations, it is suggested to split it into multiple jobs with unique requisition_ids (e.g. &#39;ReqA&#39; becomes &#39;ReqA-1&#39;, &#39;ReqA-2&#39;, etc.) as multiple jobs with the same company_name, language_code and requisition_id are not allowed. If the original requisition_id must be preserved, a custom field should be used for storage. It is also suggested to group the locations that close to each other in the same job for better search experience. Jobs with multiple addresses must have their addresses with the same LocationType to allow location filtering to work properly. (For example, a Job with addresses \&quot;1600 Amphitheatre Parkway, Mountain View, CA, USA\&quot; and \&quot;London, UK\&quot; may not have location filters applied correctly at search time since the first is a LocationType.STREET_ADDRESS and the second is a LocationType.LOCALITY.) If a job needs to have multiple addresses, it is suggested to split it into multiple jobs with same LocationTypes. The maximum number of allowed characters is 500. | [optional] 
**application_info** | [**ApplicationInfo**](ApplicationInfo.md) |  | [optional] 
**company_display_name** | **str** | Output only. Display name of the company listing the job. | [optional] 
**company_name** | **str** | Required. The resource name of the company listing the job, such as \&quot;projects/api-test-project/companies/foo\&quot;. | [optional] 
**compensation_info** | [**CompensationInfo**](CompensationInfo.md) |  | [optional] 
**custom_attributes** | [**Dict[str, CustomAttribute]**](CustomAttribute.md) | Optional. A map of fields to hold both filterable and non-filterable custom job attributes that are not covered by the provided structured fields. The keys of the map are strings up to 64 bytes and must match the pattern: a-zA-Z*. For example, key0LikeThis or KEY_1_LIKE_THIS. At most 100 filterable and at most 100 unfilterable keys are supported. For filterable &#x60;string_values&#x60;, across all keys at most 200 values are allowed, with each string no more than 255 characters. For unfilterable &#x60;string_values&#x60;, the maximum total size of &#x60;string_values&#x60; across all keys is 50KB. | [optional] 
**degree_types** | **List[str]** | Optional. The desired education degrees for the job, such as Bachelors, Masters. | [optional] 
**department** | **str** | Optional. The department or functional area within the company with the open position. The maximum number of allowed characters is 255. | [optional] 
**derived_info** | [**JobDerivedInfo**](JobDerivedInfo.md) |  | [optional] 
**description** | **str** | Required. The description of the job, which typically includes a multi-paragraph description of the company and related information. Separate fields are provided on the job object for responsibilities, qualifications, and other job characteristics. Use of these separate job fields is recommended. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 100,000. | [optional] 
**employment_types** | **List[str]** | Optional. The employment type(s) of a job, for example, full time or part time. | [optional] 
**incentives** | **str** | Optional. A description of bonus, commission, and other compensation incentives associated with the job not including salary or pay. The maximum number of allowed characters is 10,000. | [optional] 
**job_benefits** | **List[str]** | Optional. The benefits included with the job. | [optional] 
**job_end_time** | **str** | Optional. The end timestamp of the job. Typically this field is used for contracting engagements. Invalid timestamps are ignored. | [optional] 
**job_level** | **str** | Optional. The experience level associated with the job, such as \&quot;Entry Level\&quot;. | [optional] 
**job_start_time** | **str** | Optional. The start timestamp of the job in UTC time zone. Typically this field is used for contracting engagements. Invalid timestamps are ignored. | [optional] 
**language_code** | **str** | Optional. The language of the posting. This field is distinct from any requirements for fluency that are associated with the job. Language codes must be in BCP-47 format, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47){: class&#x3D;\&quot;external\&quot; target&#x3D;\&quot;_blank\&quot; }. If this field is unspecified and Job.description is present, detected language code based on Job.description is assigned, otherwise defaults to &#39;en_US&#39;. | [optional] 
**name** | **str** | Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is \&quot;projects/{project_id}/jobs/{job_id}\&quot;, for example, \&quot;projects/api-test-project/jobs/1234\&quot;. Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique. | [optional] 
**posting_create_time** | **str** | Output only. The timestamp when this job posting was created. | [optional] 
**posting_expire_time** | **str** | Optional but strongly recommended for the best service experience. The expiration timestamp of the job. After this timestamp, the job is marked as expired, and it no longer appears in search results. The expired job can&#39;t be deleted or listed by the DeleteJob and ListJobs APIs, but it can be retrieved with the GetJob API or updated with the UpdateJob API. An expired job can be updated and opened again by using a future expiration timestamp. Updating an expired job fails if there is another existing open job with same company_name, language_code and requisition_id. The expired jobs are retained in our system for 90 days. However, the overall expired job count cannot exceed 3 times the maximum of open jobs count over the past week, otherwise jobs with earlier expire time are cleaned first. Expired jobs are no longer accessible after they are cleaned out. Invalid timestamps are ignored, and treated as expire time not provided. Timestamp before the instant request is made is considered valid, the job will be treated as expired immediately. If this value is not provided at the time of job creation or is invalid, the job posting expires after 30 days from the job&#39;s creation time. For example, if the job was created on 2017/01/01 13:00AM UTC with an unspecified expiration date, the job expires after 2017/01/31 13:00AM UTC. If this value is not provided on job update, it depends on the field masks set by UpdateJobRequest.update_mask. If the field masks include expiry_time, or the masks are empty meaning that every field is updated, the job posting expires after 30 days from the job&#39;s last update time. Otherwise the expiration date isn&#39;t updated. | [optional] 
**posting_publish_time** | **str** | Optional. The timestamp this job posting was most recently published. The default value is the time the request arrives at the server. Invalid timestamps are ignored. | [optional] 
**posting_region** | **str** | Optional. The job PostingRegion (for example, state, country) throughout which the job is available. If this field is set, a LocationFilter in a search query within the job region finds this job posting if an exact location match isn&#39;t specified. If this field is set to PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job Job.addresses to the same location level as this field is strongly recommended. | [optional] 
**posting_update_time** | **str** | Output only. The timestamp when this job posting was last updated. | [optional] 
**processing_options** | [**ProcessingOptions**](ProcessingOptions.md) |  | [optional] 
**promotion_value** | **int** | Optional. A promotion value of the job, as determined by the client. The value determines the sort order of the jobs returned when searching for jobs using the featured jobs search call, with higher promotional values being returned first and ties being resolved by relevance sort. Only the jobs with a promotionValue &gt;0 are returned in a FEATURED_JOB_SEARCH. Default value is 0, and negative values are treated as 0. | [optional] 
**qualifications** | **str** | Optional. A description of the qualifications required to perform the job. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000. | [optional] 
**requisition_id** | **str** | Required. The requisition ID, also referred to as the posting ID, assigned by the client to identify a job. This field is intended to be used by clients for client identification and tracking of postings. A job is not allowed to be created if there is another job with the same [company_name], language_code and requisition_id. The maximum number of allowed characters is 255. | [optional] 
**responsibilities** | **str** | Optional. A description of job responsibilities. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000. | [optional] 
**title** | **str** | Required. The title of the job, such as \&quot;Software Engineer\&quot; The maximum number of allowed characters is 500. | [optional] 
**visibility** | **str** | Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to Visibility.ACCOUNT_ONLY if not specified. | [optional] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


