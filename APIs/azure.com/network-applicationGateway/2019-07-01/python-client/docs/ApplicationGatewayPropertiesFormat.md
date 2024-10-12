# ApplicationGatewayPropertiesFormat

Properties of the application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_certificates** | **List[object]** | Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**autoscale_configuration** | [**ApplicationGatewayAutoscaleConfiguration**](ApplicationGatewayAutoscaleConfiguration.md) |  | [optional] 
**backend_address_pools** | **List[object]** | Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**backend_http_settings_collection** | **List[object]** | Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**custom_error_configurations** | [**List[ApplicationGatewayCustomError]**](ApplicationGatewayCustomError.md) | Custom error configurations of the application gateway resource. | [optional] 
**enable_fips** | **bool** | Whether FIPS is enabled on the application gateway resource. | [optional] 
**enable_http2** | **bool** | Whether HTTP2 is enabled on the application gateway resource. | [optional] 
**firewall_policy** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 
**frontend_ip_configurations** | **List[object]** | Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**frontend_ports** | **List[object]** | Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**gateway_ip_configurations** | **List[object]** | Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**http_listeners** | **List[object]** | Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**operational_state** | **str** | Operational state of the application gateway resource. | [optional] [readonly] 
**probes** | **List[object]** | Probes of the application gateway resource. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**redirect_configurations** | **List[object]** | Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**request_routing_rules** | **List[object]** | Request routing rules of the application gateway resource. | [optional] 
**resource_guid** | **str** | The resource GUID property of the application gateway resource. | [optional] 
**rewrite_rule_sets** | **List[object]** | Rewrite rules for the application gateway resource. | [optional] 
**sku** | [**ApplicationGatewaySku**](ApplicationGatewaySku.md) |  | [optional] 
**ssl_certificates** | **List[object]** | SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**ssl_policy** | [**ApplicationGatewaySslPolicy**](ApplicationGatewaySslPolicy.md) |  | [optional] 
**trusted_root_certificates** | **List[object]** | Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**url_path_maps** | **List[object]** | URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). | [optional] 
**web_application_firewall_configuration** | [**ApplicationGatewayWebApplicationFirewallConfiguration**](ApplicationGatewayWebApplicationFirewallConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_properties_format import ApplicationGatewayPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayPropertiesFormat from a JSON string
application_gateway_properties_format_instance = ApplicationGatewayPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_properties_format_dict = application_gateway_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayPropertiesFormat from a dict
application_gateway_properties_format_from_dict = ApplicationGatewayPropertiesFormat.from_dict(application_gateway_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


