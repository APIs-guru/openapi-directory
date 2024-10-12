# ExtensionPropertiesDefinition

The extension properties definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota_create_blade_name** | **str** | The quota create blade. | [optional] 
**resource_provider_dashboard_blade_name** | **str** | The resource provider dashboard blade. | [optional] 

## Example

```python
from openapi_client.models.extension_properties_definition import ExtensionPropertiesDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionPropertiesDefinition from a JSON string
extension_properties_definition_instance = ExtensionPropertiesDefinition.from_json(json)
# print the JSON string representation of the object
print(ExtensionPropertiesDefinition.to_json())

# convert the object into a dict
extension_properties_definition_dict = extension_properties_definition_instance.to_dict()
# create an instance of ExtensionPropertiesDefinition from a dict
extension_properties_definition_from_dict = ExtensionPropertiesDefinition.from_dict(extension_properties_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


