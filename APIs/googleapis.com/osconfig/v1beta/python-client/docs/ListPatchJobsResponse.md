# ListPatchJobsResponse

A response message for listing patch jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token that can be used to get the next page of results. | [optional] 
**patch_jobs** | [**List[PatchJob]**](PatchJob.md) | The list of patch jobs. | [optional] 

## Example

```python
from openapi_client.models.list_patch_jobs_response import ListPatchJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPatchJobsResponse from a JSON string
list_patch_jobs_response_instance = ListPatchJobsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPatchJobsResponse.to_json())

# convert the object into a dict
list_patch_jobs_response_dict = list_patch_jobs_response_instance.to_dict()
# create an instance of ListPatchJobsResponse from a dict
list_patch_jobs_response_from_dict = ListPatchJobsResponse.from_dict(list_patch_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


