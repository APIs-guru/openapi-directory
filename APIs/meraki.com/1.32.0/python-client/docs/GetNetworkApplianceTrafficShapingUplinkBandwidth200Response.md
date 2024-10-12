# GetNetworkApplianceTrafficShapingUplinkBandwidth200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limits** | [**GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits**](GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimits.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_bandwidth200_response import GetNetworkApplianceTrafficShapingUplinkBandwidth200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200Response from a JSON string
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_instance = GetNetworkApplianceTrafficShapingUplinkBandwidth200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkBandwidth200Response.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_dict = get_network_appliance_traffic_shaping_uplink_bandwidth200_response_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200Response from a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_from_dict = GetNetworkApplianceTrafficShapingUplinkBandwidth200Response.from_dict(get_network_appliance_traffic_shaping_uplink_bandwidth200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


