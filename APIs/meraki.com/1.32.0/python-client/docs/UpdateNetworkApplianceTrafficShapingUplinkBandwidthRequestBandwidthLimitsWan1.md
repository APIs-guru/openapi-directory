# UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1

The bandwidth settings for the 'wan1' uplink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | The maximum download limit (integer, in Kbps). null indicates no limit | [optional] 
**limit_up** | **int** | The maximum upload limit (integer, in Kbps). null indicates no limit | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan1 import UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1 from a JSON string
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan1_instance = UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan1_dict = update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan1_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1 from a dict
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan1_from_dict = UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1.from_dict(update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


