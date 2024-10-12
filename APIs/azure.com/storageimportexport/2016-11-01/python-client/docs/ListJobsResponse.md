# ListJobsResponse

List jobs response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | link to next batch of jobs | [optional] 
**value** | [**List[JobResponse]**](JobResponse.md) | Job list | [optional] 

## Example

```python
from openapi_client.models.list_jobs_response import ListJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListJobsResponse from a JSON string
list_jobs_response_instance = ListJobsResponse.from_json(json)
# print the JSON string representation of the object
print(ListJobsResponse.to_json())

# convert the object into a dict
list_jobs_response_dict = list_jobs_response_instance.to_dict()
# create an instance of ListJobsResponse from a dict
list_jobs_response_from_dict = ListJobsResponse.from_dict(list_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


