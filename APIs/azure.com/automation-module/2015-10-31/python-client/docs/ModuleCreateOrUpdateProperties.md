# ModuleCreateOrUpdateProperties

The parameters supplied to the create or update module properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_link** | [**ContentLink**](ContentLink.md) |  | 

## Example

```python
from openapi_client.models.module_create_or_update_properties import ModuleCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleCreateOrUpdateProperties from a JSON string
module_create_or_update_properties_instance = ModuleCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ModuleCreateOrUpdateProperties.to_json())

# convert the object into a dict
module_create_or_update_properties_dict = module_create_or_update_properties_instance.to_dict()
# create an instance of ModuleCreateOrUpdateProperties from a dict
module_create_or_update_properties_from_dict = ModuleCreateOrUpdateProperties.from_dict(module_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


