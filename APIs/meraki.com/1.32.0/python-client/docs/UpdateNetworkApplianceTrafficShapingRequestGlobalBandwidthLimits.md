# UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits

Global per-client bandwidth limit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | The download bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**limit_up** | **int** | The upload bandwidth limit in Kbps. (0 represents no limit.) | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_request_global_bandwidth_limits import UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits from a JSON string
update_network_appliance_traffic_shaping_request_global_bandwidth_limits_instance = UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_request_global_bandwidth_limits_dict = update_network_appliance_traffic_shaping_request_global_bandwidth_limits_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits from a dict
update_network_appliance_traffic_shaping_request_global_bandwidth_limits_from_dict = UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits.from_dict(update_network_appliance_traffic_shaping_request_global_bandwidth_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


