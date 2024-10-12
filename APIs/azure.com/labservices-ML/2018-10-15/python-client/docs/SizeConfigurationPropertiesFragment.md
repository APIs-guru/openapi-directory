# SizeConfigurationPropertiesFragment

Represents the size configuration under the lab account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_sizes** | [**List[EnvironmentSizeFragment]**](EnvironmentSizeFragment.md) | Represents a list of size categories supported by this Lab Account (Small, Medium, Large) | [optional] 

## Example

```python
from openapi_client.models.size_configuration_properties_fragment import SizeConfigurationPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of SizeConfigurationPropertiesFragment from a JSON string
size_configuration_properties_fragment_instance = SizeConfigurationPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(SizeConfigurationPropertiesFragment.to_json())

# convert the object into a dict
size_configuration_properties_fragment_dict = size_configuration_properties_fragment_instance.to_dict()
# create an instance of SizeConfigurationPropertiesFragment from a dict
size_configuration_properties_fragment_from_dict = SizeConfigurationPropertiesFragment.from_dict(size_configuration_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


