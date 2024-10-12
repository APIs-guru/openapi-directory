# ExtensionCollectionDefinition

The manifest extension collection definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extensions** | [**ExtensionList**](ExtensionList.md) |  | [optional] 
**version** | **str** | The version of the format a.b[.c[.d]]. see System.Version documentation for more details. | [optional] 

## Example

```python
from openapi_client.models.extension_collection_definition import ExtensionCollectionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionCollectionDefinition from a JSON string
extension_collection_definition_instance = ExtensionCollectionDefinition.from_json(json)
# print the JSON string representation of the object
print(ExtensionCollectionDefinition.to_json())

# convert the object into a dict
extension_collection_definition_dict = extension_collection_definition_instance.to_dict()
# create an instance of ExtensionCollectionDefinition from a dict
extension_collection_definition_from_dict = ExtensionCollectionDefinition.from_dict(extension_collection_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


