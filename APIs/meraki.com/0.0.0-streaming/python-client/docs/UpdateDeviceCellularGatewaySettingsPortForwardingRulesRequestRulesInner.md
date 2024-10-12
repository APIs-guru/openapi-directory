# UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | &#x60;any&#x60; or &#x60;restricted&#x60;. Specify the right to make inbound connections on the specified ports or port ranges. If &#x60;restricted&#x60;, a list of allowed IPs is mandatory. | 
**allowed_ips** | **List[str]** | An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges. | [optional] 
**lan_ip** | **str** | The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN | 
**local_port** | **str** | A port or port ranges that will receive the forwarded traffic from the WAN | 
**name** | **str** | A descriptive name for the rule | [optional] 
**protocol** | **str** | TCP or UDP | 
**public_port** | **str** | A port or port ranges that will be forwarded to the host on the LAN | 

## Example

```python
from openapi_client.models.update_device_cellular_gateway_settings_port_forwarding_rules_request_rules_inner import UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestRulesInner from a JSON string
update_device_cellular_gateway_settings_port_forwarding_rules_request_rules_inner_instance = UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestRulesInner.to_json())

# convert the object into a dict
update_device_cellular_gateway_settings_port_forwarding_rules_request_rules_inner_dict = update_device_cellular_gateway_settings_port_forwarding_rules_request_rules_inner_instance.to_dict()
# create an instance of UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestRulesInner from a dict
update_device_cellular_gateway_settings_port_forwarding_rules_request_rules_inner_from_dict = UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestRulesInner.from_dict(update_device_cellular_gateway_settings_port_forwarding_rules_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


