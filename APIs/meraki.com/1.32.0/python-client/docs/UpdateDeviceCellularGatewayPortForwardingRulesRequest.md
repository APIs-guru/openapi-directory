# UpdateDeviceCellularGatewayPortForwardingRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateDeviceCellularGatewayPortForwardingRulesRequestRulesInner]**](UpdateDeviceCellularGatewayPortForwardingRulesRequestRulesInner.md) | An array of port forwarding params | [optional] 

## Example

```python
from openapi_client.models.update_device_cellular_gateway_port_forwarding_rules_request import UpdateDeviceCellularGatewayPortForwardingRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularGatewayPortForwardingRulesRequest from a JSON string
update_device_cellular_gateway_port_forwarding_rules_request_instance = UpdateDeviceCellularGatewayPortForwardingRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularGatewayPortForwardingRulesRequest.to_json())

# convert the object into a dict
update_device_cellular_gateway_port_forwarding_rules_request_dict = update_device_cellular_gateway_port_forwarding_rules_request_instance.to_dict()
# create an instance of UpdateDeviceCellularGatewayPortForwardingRulesRequest from a dict
update_device_cellular_gateway_port_forwarding_rules_request_from_dict = UpdateDeviceCellularGatewayPortForwardingRulesRequest.from_dict(update_device_cellular_gateway_port_forwarding_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


