# UpdateNetworkUplinkSettingsRequestBandwidthLimits

A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cellular** | [**UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular**](UpdateNetworkUplinkSettingsRequestBandwidthLimitsCellular.md) |  | [optional] 
**wan1** | [**UpdateNetworkUplinkSettingsRequestBandwidthLimitsWan1**](UpdateNetworkUplinkSettingsRequestBandwidthLimitsWan1.md) |  | [optional] 
**wan2** | [**UpdateNetworkUplinkSettingsRequestBandwidthLimitsWan2**](UpdateNetworkUplinkSettingsRequestBandwidthLimitsWan2.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_uplink_settings_request_bandwidth_limits import UpdateNetworkUplinkSettingsRequestBandwidthLimits

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkUplinkSettingsRequestBandwidthLimits from a JSON string
update_network_uplink_settings_request_bandwidth_limits_instance = UpdateNetworkUplinkSettingsRequestBandwidthLimits.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkUplinkSettingsRequestBandwidthLimits.to_json())

# convert the object into a dict
update_network_uplink_settings_request_bandwidth_limits_dict = update_network_uplink_settings_request_bandwidth_limits_instance.to_dict()
# create an instance of UpdateNetworkUplinkSettingsRequestBandwidthLimits from a dict
update_network_uplink_settings_request_bandwidth_limits_from_dict = UpdateNetworkUplinkSettingsRequestBandwidthLimits.from_dict(update_network_uplink_settings_request_bandwidth_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


