# NetworkSettingsProperties

The properties of network settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_adapters** | [**List[NetworkAdapter]**](NetworkAdapter.md) | The network adapter list on the device. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_settings_properties import NetworkSettingsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSettingsProperties from a JSON string
network_settings_properties_instance = NetworkSettingsProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkSettingsProperties.to_json())

# convert the object into a dict
network_settings_properties_dict = network_settings_properties_instance.to_dict()
# create an instance of NetworkSettingsProperties from a dict
network_settings_properties_from_dict = NetworkSettingsProperties.from_dict(network_settings_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


