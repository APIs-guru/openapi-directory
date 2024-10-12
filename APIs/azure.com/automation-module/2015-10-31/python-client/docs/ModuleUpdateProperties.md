# ModuleUpdateProperties

The parameters supplied to the update properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_link** | [**ContentLink**](ContentLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.module_update_properties import ModuleUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleUpdateProperties from a JSON string
module_update_properties_instance = ModuleUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ModuleUpdateProperties.to_json())

# convert the object into a dict
module_update_properties_dict = module_update_properties_instance.to_dict()
# create an instance of ModuleUpdateProperties from a dict
module_update_properties_from_dict = ModuleUpdateProperties.from_dict(module_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


