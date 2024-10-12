# ExtensionList

List of the extensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[ExtensionDefinition]**](ExtensionDefinition.md) | List of the extensions. | [optional] 

## Example

```python
from openapi_client.models.extension_list import ExtensionList

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionList from a JSON string
extension_list_instance = ExtensionList.from_json(json)
# print the JSON string representation of the object
print(ExtensionList.to_json())

# convert the object into a dict
extension_list_dict = extension_list_instance.to_dict()
# create an instance of ExtensionList from a dict
extension_list_from_dict = ExtensionList.from_dict(extension_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


