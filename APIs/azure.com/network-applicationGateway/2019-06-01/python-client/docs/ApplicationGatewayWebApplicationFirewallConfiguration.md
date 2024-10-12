# ApplicationGatewayWebApplicationFirewallConfiguration

Application gateway web application firewall configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_rule_groups** | [**List[ApplicationGatewayFirewallDisabledRuleGroup]**](ApplicationGatewayFirewallDisabledRuleGroup.md) | The disabled rule groups. | [optional] 
**enabled** | **bool** | Whether the web application firewall is enabled or not. | 
**exclusions** | [**List[ApplicationGatewayFirewallExclusion]**](ApplicationGatewayFirewallExclusion.md) | The exclusion list. | [optional] 
**file_upload_limit_in_mb** | **int** | Maximum file upload size in Mb for WAF. | [optional] 
**firewall_mode** | **str** | Web application firewall mode. | 
**max_request_body_size** | **int** | Maximum request body size for WAF. | [optional] 
**max_request_body_size_in_kb** | **int** | Maximum request body size in Kb for WAF. | [optional] 
**request_body_check** | **bool** | Whether allow WAF to check request Body. | [optional] 
**rule_set_type** | **str** | The type of the web application firewall rule set. Possible values are: &#39;OWASP&#39;. | 
**rule_set_version** | **str** | The version of the rule set type. | 

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


