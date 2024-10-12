# ListPatchDeploymentsResponse

A response message for listing patch deployments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token that can be used to get the next page of patch deployments. | [optional] 
**patch_deployments** | [**List[PatchDeployment]**](PatchDeployment.md) | The list of patch deployments. | [optional] 

## Example

```python
from openapi_client.models.list_patch_deployments_response import ListPatchDeploymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPatchDeploymentsResponse from a JSON string
list_patch_deployments_response_instance = ListPatchDeploymentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPatchDeploymentsResponse.to_json())

# convert the object into a dict
list_patch_deployments_response_dict = list_patch_deployments_response_instance.to_dict()
# create an instance of ListPatchDeploymentsResponse from a dict
list_patch_deployments_response_from_dict = ListPatchDeploymentsResponse.from_dict(list_patch_deployments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


