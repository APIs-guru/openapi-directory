# ExtensionResource

The response to an extension resource GET request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | [**ExtensionResourcePlan**](ExtensionResourcePlan.md) |  | [optional] 
**properties** | **Dict[str, str]** | Resource properties. | [optional] 
**id** | **str** | Unique identifier of the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.extension_resource import ExtensionResource

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionResource from a JSON string
extension_resource_instance = ExtensionResource.from_json(json)
# print the JSON string representation of the object
print(ExtensionResource.to_json())

# convert the object into a dict
extension_resource_dict = extension_resource_instance.to_dict()
# create an instance of ExtensionResource from a dict
extension_resource_from_dict = ExtensionResource.from_dict(extension_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


