# SizeConfigurationProperties

Represents the size configuration under the lab account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_sizes** | [**List[EnvironmentSize]**](EnvironmentSize.md) | Represents a list of size categories supported by this Lab Account (Small, Medium, Large) | [optional] 

## Example

```python
from openapi_client.models.size_configuration_properties import SizeConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SizeConfigurationProperties from a JSON string
size_configuration_properties_instance = SizeConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(SizeConfigurationProperties.to_json())

# convert the object into a dict
size_configuration_properties_dict = size_configuration_properties_instance.to_dict()
# create an instance of SizeConfigurationProperties from a dict
size_configuration_properties_from_dict = SizeConfigurationProperties.from_dict(size_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


