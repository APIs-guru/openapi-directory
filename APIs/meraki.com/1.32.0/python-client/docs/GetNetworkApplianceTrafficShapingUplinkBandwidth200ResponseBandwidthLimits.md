# GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits

A hash uplink keys and their configured settings for the Appliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cellular** | [**GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular**](GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular.md) |  | [optional] 
**wan1** | [**GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1**](GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1.md) |  | [optional] 
**wan2** | [**GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2**](GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan2.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits import GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits from a JSON string
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_instance = GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_dict = get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits from a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_from_dict = GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits.from_dict(get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


