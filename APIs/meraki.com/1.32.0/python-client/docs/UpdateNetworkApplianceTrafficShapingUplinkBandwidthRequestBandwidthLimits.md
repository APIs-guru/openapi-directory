# UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits

A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cellular** | [**UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsCellular**](UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsCellular.md) |  | [optional] 
**wan1** | [**UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1**](UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan1.md) |  | [optional] 
**wan2** | [**UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2**](UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsWan2.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits import UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits from a JSON string
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_instance = UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_dict = update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits from a dict
update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_from_dict = UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits.from_dict(update_network_appliance_traffic_shaping_uplink_bandwidth_request_bandwidth_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


