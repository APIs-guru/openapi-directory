# PatchStackRequestAdditionalResourcesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | 
**resource_id** | **str** |  | 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patch_stack_request_additional_resources_inner import PatchStackRequestAdditionalResourcesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PatchStackRequestAdditionalResourcesInner from a JSON string
patch_stack_request_additional_resources_inner_instance = PatchStackRequestAdditionalResourcesInner.from_json(json)
# print the JSON string representation of the object
print(PatchStackRequestAdditionalResourcesInner.to_json())

# convert the object into a dict
patch_stack_request_additional_resources_inner_dict = patch_stack_request_additional_resources_inner_instance.to_dict()
# create an instance of PatchStackRequestAdditionalResourcesInner from a dict
patch_stack_request_additional_resources_inner_from_dict = PatchStackRequestAdditionalResourcesInner.from_dict(patch_stack_request_additional_resources_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


