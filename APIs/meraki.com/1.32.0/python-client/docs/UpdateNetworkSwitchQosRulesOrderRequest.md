# UpdateNetworkSwitchQosRulesOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_ids** | **List[str]** | A list of quality of service rule IDs arranged in order in which they should be processed by the switch. | 

## Example

```python
from openapi_client.models.update_network_switch_qos_rules_order_request import UpdateNetworkSwitchQosRulesOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchQosRulesOrderRequest from a JSON string
update_network_switch_qos_rules_order_request_instance = UpdateNetworkSwitchQosRulesOrderRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchQosRulesOrderRequest.to_json())

# convert the object into a dict
update_network_switch_qos_rules_order_request_dict = update_network_switch_qos_rules_order_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchQosRulesOrderRequest from a dict
update_network_switch_qos_rules_order_request_from_dict = UpdateNetworkSwitchQosRulesOrderRequest.from_dict(update_network_switch_qos_rules_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


