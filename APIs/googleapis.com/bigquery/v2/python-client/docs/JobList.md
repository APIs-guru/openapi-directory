# JobList

JobList is the response format for a jobs.list call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A hash of this page of results. | [optional] 
**jobs** | [**List[JobListJobsInner]**](JobListJobsInner.md) | List of jobs that were requested. | [optional] 
**kind** | **str** | The resource type of the response. | [optional] [default to 'bigquery#jobList']
**next_page_token** | **str** | A token to request the next page of results. | [optional] 
**unreachable** | **List[str]** | A list of skipped locations that were unreachable. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations. Example: \&quot;europe-west5\&quot; | [optional] 

## Example

```python
from openapi_client.models.job_list import JobList

# TODO update the JSON string below
json = "{}"
# create an instance of JobList from a JSON string
job_list_instance = JobList.from_json(json)
# print the JSON string representation of the object
print(JobList.to_json())

# convert the object into a dict
job_list_dict = job_list_instance.to_dict()
# create an instance of JobList from a dict
job_list_from_dict = JobList.from_dict(job_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


