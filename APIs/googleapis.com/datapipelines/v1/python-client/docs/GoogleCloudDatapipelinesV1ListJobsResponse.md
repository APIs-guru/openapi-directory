# GoogleCloudDatapipelinesV1ListJobsResponse

Response message for ListJobs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[GoogleCloudDatapipelinesV1Job]**](GoogleCloudDatapipelinesV1Job.md) | Results that were accessible to the caller. Results are always in descending order of job creation date. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_list_jobs_response import GoogleCloudDatapipelinesV1ListJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1ListJobsResponse from a JSON string
google_cloud_datapipelines_v1_list_jobs_response_instance = GoogleCloudDatapipelinesV1ListJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1ListJobsResponse.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_list_jobs_response_dict = google_cloud_datapipelines_v1_list_jobs_response_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1ListJobsResponse from a dict
google_cloud_datapipelines_v1_list_jobs_response_from_dict = GoogleCloudDatapipelinesV1ListJobsResponse.from_dict(google_cloud_datapipelines_v1_list_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


