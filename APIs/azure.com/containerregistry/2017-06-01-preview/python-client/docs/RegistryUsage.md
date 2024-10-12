# RegistryUsage

The quota usage for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | The current value of the usage. | [optional] 
**limit** | **int** | The limit of the usage. | [optional] 
**name** | **str** | The name of the usage. | [optional] 
**unit** | **str** | The unit of measurement. | [optional] 

## Example

```python
from openapi_client.models.registry_usage import RegistryUsage

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryUsage from a JSON string
registry_usage_instance = RegistryUsage.from_json(json)
# print the JSON string representation of the object
print(RegistryUsage.to_json())

# convert the object into a dict
registry_usage_dict = registry_usage_instance.to_dict()
# create an instance of RegistryUsage from a dict
registry_usage_from_dict = RegistryUsage.from_dict(registry_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


