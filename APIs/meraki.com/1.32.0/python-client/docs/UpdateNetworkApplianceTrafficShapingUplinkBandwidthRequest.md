# UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limits** | [**UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits**](UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimits.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_bandwidth_request import UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest from a JSON string
update_network_appliance_traffic_shaping_uplink_bandwidth_request_instance = UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_bandwidth_request_dict = update_network_appliance_traffic_shaping_uplink_bandwidth_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest from a dict
update_network_appliance_traffic_shaping_uplink_bandwidth_request_from_dict = UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest.from_dict(update_network_appliance_traffic_shaping_uplink_bandwidth_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


