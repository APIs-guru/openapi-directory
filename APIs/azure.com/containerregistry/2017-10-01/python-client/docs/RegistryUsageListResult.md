# RegistryUsageListResult

The result of a request to get container registry quota usages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RegistryUsage]**](RegistryUsage.md) | The list of container registry quota usages. | [optional] 

## Example

```python
from openapi_client.models.registry_usage_list_result import RegistryUsageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryUsageListResult from a JSON string
registry_usage_list_result_instance = RegistryUsageListResult.from_json(json)
# print the JSON string representation of the object
print(RegistryUsageListResult.to_json())

# convert the object into a dict
registry_usage_list_result_dict = registry_usage_list_result_instance.to_dict()
# create an instance of RegistryUsageListResult from a dict
registry_usage_list_result_from_dict = RegistryUsageListResult.from_dict(registry_usage_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


