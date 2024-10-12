# ResourceNamespacePatch

Definition of resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_namespace_patch import ResourceNamespacePatch

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceNamespacePatch from a JSON string
resource_namespace_patch_instance = ResourceNamespacePatch.from_json(json)
# print the JSON string representation of the object
print(ResourceNamespacePatch.to_json())

# convert the object into a dict
resource_namespace_patch_dict = resource_namespace_patch_instance.to_dict()
# create an instance of ResourceNamespacePatch from a dict
resource_namespace_patch_from_dict = ResourceNamespacePatch.from_dict(resource_namespace_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


