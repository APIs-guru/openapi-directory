# ApplicationGatewayHttpListenerPropertiesFormat

Properties of HTTP listener of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_error_configurations** | [**List[ApplicationGatewayCustomError]**](ApplicationGatewayCustomError.md) | Custom error configurations of the HTTP listener. | [optional] 
**frontend_ip_configuration** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 
**frontend_port** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 
**host_name** | **str** | Host name of HTTP listener. | [optional] 
**protocol** | [**ApplicationGatewayProtocol**](ApplicationGatewayProtocol.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the HTTP listener resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**require_server_name_indication** | **bool** | Applicable only if protocol is https. Enables SNI for multi-hosting. | [optional] 
**ssl_certificate** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_http_listener_properties_format import ApplicationGatewayHttpListenerPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayHttpListenerPropertiesFormat from a JSON string
application_gateway_http_listener_properties_format_instance = ApplicationGatewayHttpListenerPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayHttpListenerPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_http_listener_properties_format_dict = application_gateway_http_listener_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayHttpListenerPropertiesFormat from a dict
application_gateway_http_listener_properties_format_from_dict = ApplicationGatewayHttpListenerPropertiesFormat.from_dict(application_gateway_http_listener_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


