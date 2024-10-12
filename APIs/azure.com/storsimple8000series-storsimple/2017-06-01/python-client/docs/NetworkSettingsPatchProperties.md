# NetworkSettingsPatchProperties

The properties of the network settings patch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**DNSSettings**](DNSSettings.md) |  | [optional] 
**network_adapters** | [**NetworkAdapterList**](NetworkAdapterList.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_settings_patch_properties import NetworkSettingsPatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSettingsPatchProperties from a JSON string
network_settings_patch_properties_instance = NetworkSettingsPatchProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkSettingsPatchProperties.to_json())

# convert the object into a dict
network_settings_patch_properties_dict = network_settings_patch_properties_instance.to_dict()
# create an instance of NetworkSettingsPatchProperties from a dict
network_settings_patch_properties_from_dict = NetworkSettingsPatchProperties.from_dict(network_settings_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


