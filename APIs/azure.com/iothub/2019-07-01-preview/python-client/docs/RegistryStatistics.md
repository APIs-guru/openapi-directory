# RegistryStatistics

Identity registry statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_device_count** | **int** | The count of disabled devices in the identity registry. | [optional] [readonly] 
**enabled_device_count** | **int** | The count of enabled devices in the identity registry. | [optional] [readonly] 
**total_device_count** | **int** | The total count of devices in the identity registry. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registry_statistics import RegistryStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryStatistics from a JSON string
registry_statistics_instance = RegistryStatistics.from_json(json)
# print the JSON string representation of the object
print(RegistryStatistics.to_json())

# convert the object into a dict
registry_statistics_dict = registry_statistics_instance.to_dict()
# create an instance of RegistryStatistics from a dict
registry_statistics_from_dict = RegistryStatistics.from_dict(registry_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


