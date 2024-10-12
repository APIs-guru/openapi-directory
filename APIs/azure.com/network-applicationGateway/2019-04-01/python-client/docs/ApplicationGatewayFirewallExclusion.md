# ApplicationGatewayFirewallExclusion

Allow to exclude some variable satisfy the condition for the WAF check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_variable** | **str** | The variable to be excluded. | 
**selector** | **str** | When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to. | 
**selector_match_operator** | **str** | When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to. | 

## Example

```python
from openapi_client.models.application_gateway_firewall_exclusion import ApplicationGatewayFirewallExclusion

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFirewallExclusion from a JSON string
application_gateway_firewall_exclusion_instance = ApplicationGatewayFirewallExclusion.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFirewallExclusion.to_json())

# convert the object into a dict
application_gateway_firewall_exclusion_dict = application_gateway_firewall_exclusion_instance.to_dict()
# create an instance of ApplicationGatewayFirewallExclusion from a dict
application_gateway_firewall_exclusion_from_dict = ApplicationGatewayFirewallExclusion.from_dict(application_gateway_firewall_exclusion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


