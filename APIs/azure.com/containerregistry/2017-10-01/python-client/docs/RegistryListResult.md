# RegistryListResult

The result of a request to list container registries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next list of container registries. | [optional] 
**value** | [**List[Registry]**](Registry.md) | The list of container registries. Since this list may be incomplete, the nextLink field should be used to request the next list of container registries. | [optional] 

## Example

```python
from openapi_client.models.registry_list_result import RegistryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryListResult from a JSON string
registry_list_result_instance = RegistryListResult.from_json(json)
# print the JSON string representation of the object
print(RegistryListResult.to_json())

# convert the object into a dict
registry_list_result_dict = registry_list_result_instance.to_dict()
# create an instance of RegistryListResult from a dict
registry_list_result_from_dict = RegistryListResult.from_dict(registry_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


