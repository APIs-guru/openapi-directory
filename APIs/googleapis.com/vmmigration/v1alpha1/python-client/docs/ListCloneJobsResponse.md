# ListCloneJobsResponse

Response message for 'ListCloneJobs' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clone_jobs** | [**List[CloneJob]**](CloneJob.md) | Output only. The list of clone jobs response. | [optional] [readonly] 
**next_page_token** | **str** | Output only. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] [readonly] 
**unreachable** | **List[str]** | Output only. Locations that could not be reached. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_clone_jobs_response import ListCloneJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCloneJobsResponse from a JSON string
list_clone_jobs_response_instance = ListCloneJobsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCloneJobsResponse.to_json())

# convert the object into a dict
list_clone_jobs_response_dict = list_clone_jobs_response_instance.to_dict()
# create an instance of ListCloneJobsResponse from a dict
list_clone_jobs_response_from_dict = ListCloneJobsResponse.from_dict(list_clone_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


