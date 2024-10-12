# ApplicationGatewayRedirectConfigurationPropertiesFormat

Properties of redirect configuration of the application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_path** | **bool** | Include path in the redirected url. | [optional] 
**include_query_string** | **bool** | Include query string in the redirected url. | [optional] 
**path_rules** | [**List[ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration]**](ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration.md) | Path rules specifying redirect configuration. | [optional] 
**redirect_type** | [**RedirectTypeEnum**](RedirectTypeEnum.md) |  | [optional] 
**request_routing_rules** | [**List[ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration]**](ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration.md) | Request routing specifying redirect configuration. | [optional] 
**target_listener** | [**ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration**](ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration.md) |  | [optional] 
**target_url** | **str** | Url to redirect the request to. | [optional] 
**url_path_maps** | [**List[ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration]**](ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration.md) | Url path maps specifying default redirect configuration. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_redirect_configuration_properties_format import ApplicationGatewayRedirectConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayRedirectConfigurationPropertiesFormat from a JSON string
application_gateway_redirect_configuration_properties_format_instance = ApplicationGatewayRedirectConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayRedirectConfigurationPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_redirect_configuration_properties_format_dict = application_gateway_redirect_configuration_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayRedirectConfigurationPropertiesFormat from a dict
application_gateway_redirect_configuration_properties_format_from_dict = ApplicationGatewayRedirectConfigurationPropertiesFormat.from_dict(application_gateway_redirect_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


