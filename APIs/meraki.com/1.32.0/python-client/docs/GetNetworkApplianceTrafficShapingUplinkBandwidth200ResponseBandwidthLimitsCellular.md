# GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular

uplink cellular configured limits [optional]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | configured DOWN limit for the uplink (in Kbps).  Null indicated unlimited | [optional] 
**limit_up** | **int** | configured UP limit for the uplink (in Kbps).  Null indicated unlimited | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_cellular import GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular from a JSON string
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_cellular_instance = GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_cellular_dict = get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_cellular_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular from a dict
get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_cellular_from_dict = GetNetworkApplianceTrafficShapingUplinkBandwidth200ResponseBandwidthLimitsCellular.from_dict(get_network_appliance_traffic_shaping_uplink_bandwidth200_response_bandwidth_limits_cellular_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


