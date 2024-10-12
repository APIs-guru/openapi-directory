# ExtensionResourceListResult

The response to an extension resource list GET request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ExtensionResource]**](ExtensionResource.md) | Array of extension resource details. | [optional] 

## Example

```python
from openapi_client.models.extension_resource_list_result import ExtensionResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionResourceListResult from a JSON string
extension_resource_list_result_instance = ExtensionResourceListResult.from_json(json)
# print the JSON string representation of the object
print(ExtensionResourceListResult.to_json())

# convert the object into a dict
extension_resource_list_result_dict = extension_resource_list_result_instance.to_dict()
# create an instance of ExtensionResourceListResult from a dict
extension_resource_list_result_from_dict = ExtensionResourceListResult.from_dict(extension_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


