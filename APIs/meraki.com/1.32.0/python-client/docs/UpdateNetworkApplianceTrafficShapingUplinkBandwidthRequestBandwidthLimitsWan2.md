# UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2

The bandwidth settings for the 'wan2' uplink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | The maximum download limit (integer, in Kbps). null indicates no limit | [optional] 
**limit_up** | **int** | The maximum upload limit (integer, in Kbps). null indicates no limit | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan2 import UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2 from a JSON string
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan2_instance = UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan2_dict = update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan2_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2 from a dict
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan2_from_dict = UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2.from_dict(update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_wan2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


