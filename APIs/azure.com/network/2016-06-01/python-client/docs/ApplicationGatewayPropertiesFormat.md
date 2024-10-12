# ApplicationGatewayPropertiesFormat

Properties of Application Gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_certificates** | [**List[ApplicationGatewayAuthenticationCertificate]**](ApplicationGatewayAuthenticationCertificate.md) | Authentication certificates of application gateway resource | [optional] 
**backend_address_pools** | [**List[ApplicationGatewayBackendAddressPool]**](ApplicationGatewayBackendAddressPool.md) | Backend address pool of application gateway resource | [optional] 
**backend_http_settings_collection** | [**List[ApplicationGatewayBackendHttpSettings]**](ApplicationGatewayBackendHttpSettings.md) | Backend http settings of application gateway resource | [optional] 
**frontend_ip_configurations** | [**List[ApplicationGatewayFrontendIPConfiguration]**](ApplicationGatewayFrontendIPConfiguration.md) | Frontend IP addresses of application gateway resource | [optional] 
**frontend_ports** | [**List[ApplicationGatewayFrontendPort]**](ApplicationGatewayFrontendPort.md) | Frontend ports of application gateway resource | [optional] 
**gateway_ip_configurations** | [**List[ApplicationGatewayIPConfiguration]**](ApplicationGatewayIPConfiguration.md) | Subnets of application gateway resource | [optional] 
**http_listeners** | [**List[ApplicationGatewayHttpListener]**](ApplicationGatewayHttpListener.md) | HTTP listeners of application gateway resource | [optional] 
**operational_state** | **str** | Operational state of application gateway resource | [optional] [readonly] 
**probes** | [**List[ApplicationGatewayProbe]**](ApplicationGatewayProbe.md) | Probes of application gateway resource | [optional] 
**provisioning_state** | **str** | Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed | [optional] 
**request_routing_rules** | [**List[ApplicationGatewayRequestRoutingRule]**](ApplicationGatewayRequestRoutingRule.md) | Request routing rules of application gateway resource | [optional] 
**resource_guid** | **str** | Resource guid property of the ApplicationGateway resource | [optional] 
**sku** | [**ApplicationGatewaySku**](ApplicationGatewaySku.md) |  | [optional] 
**ssl_certificates** | [**List[ApplicationGatewaySslCertificate]**](ApplicationGatewaySslCertificate.md) | SSL certificates of application gateway resource | [optional] 
**ssl_policy** | [**ApplicationGatewaySslPolicy**](ApplicationGatewaySslPolicy.md) |  | [optional] 
**url_path_maps** | [**List[ApplicationGatewayUrlPathMap]**](ApplicationGatewayUrlPathMap.md) | URL path map of application gateway resource | [optional] 

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


