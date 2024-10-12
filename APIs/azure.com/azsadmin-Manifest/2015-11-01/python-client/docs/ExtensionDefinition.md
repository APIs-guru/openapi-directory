# ExtensionDefinition

The data contract for specifying extensions in resource provider manifests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name. | [optional] 
**obsolete_bundles_bitmask** | **int** | The obsolete bundles bitmask. | [optional] 
**properties** | [**ExtensionPropertiesDefinition**](ExtensionPropertiesDefinition.md) |  | [optional] 
**resource_access** | [**ResourceAccessList**](ResourceAccessList.md) |  | [optional] 
**uri** | **str** | The Uri | [optional] 

## Example

```python
from openapi_client.models.extension_definition import ExtensionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionDefinition from a JSON string
extension_definition_instance = ExtensionDefinition.from_json(json)
# print the JSON string representation of the object
print(ExtensionDefinition.to_json())

# convert the object into a dict
extension_definition_dict = extension_definition_instance.to_dict()
# create an instance of ExtensionDefinition from a dict
extension_definition_from_dict = ExtensionDefinition.from_dict(extension_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


