# UpdateNetworkPortForwardingRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateNetworkPortForwardingRulesRequestRulesInner]**](UpdateNetworkPortForwardingRulesRequestRulesInner.md) | An array of port forwarding params | 

## Example

```python
from openapi_client.models.update_network_port_forwarding_rules_request import UpdateNetworkPortForwardingRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkPortForwardingRulesRequest from a JSON string
update_network_port_forwarding_rules_request_instance = UpdateNetworkPortForwardingRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkPortForwardingRulesRequest.to_json())

# convert the object into a dict
update_network_port_forwarding_rules_request_dict = update_network_port_forwarding_rules_request_instance.to_dict()
# create an instance of UpdateNetworkPortForwardingRulesRequest from a dict
update_network_port_forwarding_rules_request_from_dict = UpdateNetworkPortForwardingRulesRequest.from_dict(update_network_port_forwarding_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


