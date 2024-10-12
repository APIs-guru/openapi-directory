# ApplicationGatewayPropertiesFormat

Properties of Application Gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pools** | [**List[ApplicationGatewayBackendAddressPool]**](ApplicationGatewayBackendAddressPool.md) | Gets or sets backend address pool of application gateway resource | [optional] 
**backend_http_settings_collection** | [**List[ApplicationGatewayBackendHttpSettings]**](ApplicationGatewayBackendHttpSettings.md) | Gets or sets backend http settings of application gateway resource | [optional] 
**frontend_ip_configurations** | [**List[ApplicationGatewayFrontendIPConfiguration]**](ApplicationGatewayFrontendIPConfiguration.md) | Gets or sets frontend IP addresses of application gateway resource | [optional] 
**frontend_ports** | [**List[ApplicationGatewayFrontendPort]**](ApplicationGatewayFrontendPort.md) | Gets or sets frontend ports of application gateway resource | [optional] 
**gateway_ip_configurations** | [**List[ApplicationGatewayIPConfiguration]**](ApplicationGatewayIPConfiguration.md) | Gets or sets subnets of application gateway resource | [optional] 
**http_listeners** | [**List[ApplicationGatewayHttpListener]**](ApplicationGatewayHttpListener.md) | Gets or sets HTTP listeners of application gateway resource | [optional] 
**operational_state** | **str** | Gets operational state of application gateway resource | [optional] [readonly] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed | [optional] 
**request_routing_rules** | [**List[ApplicationGatewayRequestRoutingRule]**](ApplicationGatewayRequestRoutingRule.md) | Gets or sets request routing rules of application gateway resource | [optional] 
**resource_guid** | **str** | Gets or sets resource guid property of the ApplicationGateway resource | [optional] 
**sku** | [**ApplicationGatewaySku**](ApplicationGatewaySku.md) |  | [optional] 
**ssl_certificates** | [**List[ApplicationGatewaySslCertificate]**](ApplicationGatewaySslCertificate.md) | Gets or sets ssl certificates of application gateway resource | [optional] 

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


