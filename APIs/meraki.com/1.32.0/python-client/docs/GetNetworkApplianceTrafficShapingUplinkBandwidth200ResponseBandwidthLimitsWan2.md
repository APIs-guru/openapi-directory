# GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2

uplink wan2 configured limits [optional]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | configured DOWN limit for the uplink (in Kbps).  Null indicated unlimited | [optional] 
**limit_up** | **int** | configured UP limit for the uplink (in Kbps).  Null indicated unlimited | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan2 import GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2 from a JSON string
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan2_instance = GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan2_dict = get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan2_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2 from a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan2_from_dict = GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2.from_dict(get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


