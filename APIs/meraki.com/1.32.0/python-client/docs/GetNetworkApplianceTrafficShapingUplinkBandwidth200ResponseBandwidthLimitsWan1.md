# GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1

uplink wan1 configured limits [optional]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | configured DOWN limit for the uplink (in Kbps).  Null indicated unlimited | [optional] 
**limit_up** | **int** | configured UP limit for the uplink (in Kbps).  Null indicated unlimited | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan1 import GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1 from a JSON string
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan1_instance = GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan1_dict = get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan1_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1 from a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan1_from_dict = GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsWan1.from_dict(get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_wan1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


