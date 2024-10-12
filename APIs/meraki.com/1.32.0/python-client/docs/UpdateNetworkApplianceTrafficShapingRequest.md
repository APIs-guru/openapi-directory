# UpdateNetworkApplianceTrafficShapingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_bandwidth_limits** | [**UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits**](UpdateNetworkApplianceTrafficShapingRequestGlobalBandwidthLimits.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_request import UpdateNetworkApplianceTrafficShapingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingRequest from a JSON string
update_network_appliance_traffic_shaping_request_instance = UpdateNetworkApplianceTrafficShapingRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingRequest.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_request_dict = update_network_appliance_traffic_shaping_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingRequest from a dict
update_network_appliance_traffic_shaping_request_from_dict = UpdateNetworkApplianceTrafficShapingRequest.from_dict(update_network_appliance_traffic_shaping_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


