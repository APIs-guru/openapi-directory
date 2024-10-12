# NetworkSettingsProperties

The properties of NetworkSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_networks** | [**List[NodeNetwork]**](NodeNetwork.md) | The NetworkAdapters under each node of the device. | 
**primary_dns_server** | **str** | The Primary DNS server for the device | 
**secondary_dns_server** | **str** | The secondary DNS server for the device | [optional] 

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


