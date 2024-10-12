# UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular

The bandwidth settings for the 'cellular' uplink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | The maximum download limit (integer, in Kbps). null indicates no limit | [optional] 
**limit_up** | **int** | The maximum upload limit (integer, in Kbps). null indicates no limit | [optional] 

## Example

```python
from openapi_client.models.update_network_uplink_settings_request_bandwidth_limits_cellular import UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular from a JSON string
update_network_uplink_settings_request_bandwidth_limits_cellular_instance = UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular.to_json())

# convert the object into a dict
update_network_uplink_settings_request_bandwidth_limits_cellular_dict = update_network_uplink_settings_request_bandwidth_limits_cellular_instance.to_dict()
# create an instance of UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular from a dict
update_network_uplink_settings_request_bandwidth_limits_cellular_from_dict = UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular.from_dict(update_network_uplink_settings_request_bandwidth_limits_cellular_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


