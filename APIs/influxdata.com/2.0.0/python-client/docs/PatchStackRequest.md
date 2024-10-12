# PatchStackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_resources** | [**List[PatchStackRequestAdditionalResourcesInner]**](PatchStackRequestAdditionalResourcesInner.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**template_urls** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.patch_stack_request import PatchStackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchStackRequest from a JSON string
patch_stack_request_instance = PatchStackRequest.from_json(json)
# print the JSON string representation of the object
print(PatchStackRequest.to_json())

# convert the object into a dict
patch_stack_request_dict = patch_stack_request_instance.to_dict()
# create an instance of PatchStackRequest from a dict
patch_stack_request_from_dict = PatchStackRequest.from_dict(patch_stack_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


