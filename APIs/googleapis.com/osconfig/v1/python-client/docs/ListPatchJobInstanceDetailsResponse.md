# ListPatchJobInstanceDetailsResponse

A response message for listing the instances details for a patch job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token that can be used to get the next page of results. | [optional] 
**patch_job_instance_details** | [**List[PatchJobInstanceDetails]**](PatchJobInstanceDetails.md) | A list of instance status. | [optional] 

## Example

```python
from openapi_client.models.list_patch_job_instance_details_response import ListPatchJobInstanceDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPatchJobInstanceDetailsResponse from a JSON string
list_patch_job_instance_details_response_instance = ListPatchJobInstanceDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPatchJobInstanceDetailsResponse.to_json())

# convert the object into a dict
list_patch_job_instance_details_response_dict = list_patch_job_instance_details_response_instance.to_dict()
# create an instance of ListPatchJobInstanceDetailsResponse from a dict
list_patch_job_instance_details_response_from_dict = ListPatchJobInstanceDetailsResponse.from_dict(list_patch_job_instance_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


