# ApplicationGatewayWebApplicationFirewallConfiguration

Application gateway web application firewall configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the web application firewall is enabled. | 
**firewall_mode** | **str** | Web application firewall mode. Possible values are: &#39;Detection&#39; and &#39;Prevention&#39;. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_web_application_firewall_configuration import ApplicationGatewayWebApplicationFirewallConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayWebApplicationFirewallConfiguration from a JSON string
application_gateway_web_application_firewall_configuration_instance = ApplicationGatewayWebApplicationFirewallConfiguration.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayWebApplicationFirewallConfiguration.to_json())

# convert the object into a dict
application_gateway_web_application_firewall_configuration_dict = application_gateway_web_application_firewall_configuration_instance.to_dict()
# create an instance of ApplicationGatewayWebApplicationFirewallConfiguration from a dict
application_gateway_web_application_firewall_configuration_from_dict = ApplicationGatewayWebApplicationFirewallConfiguration.from_dict(application_gateway_web_application_firewall_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


