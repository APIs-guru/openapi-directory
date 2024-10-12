# ExtensionListResult

Represents the response to a list extensions request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **List[object]** | The list of extensions. | [optional] 

## Example

```python
from openapi_client.models.extension_list_result import ExtensionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionListResult from a JSON string
extension_list_result_instance = ExtensionListResult.from_json(json)
# print the JSON string representation of the object
print(ExtensionListResult.to_json())

# convert the object into a dict
extension_list_result_dict = extension_list_result_instance.to_dict()
# create an instance of ExtensionListResult from a dict
extension_list_result_from_dict = ExtensionListResult.from_dict(extension_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


