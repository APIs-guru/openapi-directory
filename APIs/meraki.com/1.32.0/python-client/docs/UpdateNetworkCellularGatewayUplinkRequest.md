# UpdateNetworkCellularGatewayUplinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limits** | [**UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsCellular**](UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBandwidthLimitsCellular.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_cellular_gateway_uplink_request import UpdateNetworkCellularGatewayUplinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkCellularGatewayUplinkRequest from a JSON string
update_network_cellular_gateway_uplink_request_instance = UpdateNetworkCellularGatewayUplinkRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkCellularGatewayUplinkRequest.to_json())

# convert the object into a dict
update_network_cellular_gateway_uplink_request_dict = update_network_cellular_gateway_uplink_request_instance.to_dict()
# create an instance of UpdateNetworkCellularGatewayUplinkRequest from a dict
update_network_cellular_gateway_uplink_request_from_dict = UpdateNetworkCellularGatewayUplinkRequest.from_dict(update_network_cellular_gateway_uplink_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


