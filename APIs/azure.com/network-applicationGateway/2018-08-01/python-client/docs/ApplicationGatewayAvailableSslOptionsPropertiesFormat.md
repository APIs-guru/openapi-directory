# ApplicationGatewayAvailableSslOptionsPropertiesFormat

Properties of ApplicationGatewayAvailableSslOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_cipher_suites** | [**List[CipherSuitesEnum]**](CipherSuitesEnum.md) | List of available Ssl cipher suites. | [optional] 
**available_protocols** | [**List[ProtocolsEnum]**](ProtocolsEnum.md) | List of available Ssl protocols. | [optional] 
**default_policy** | [**PolicyNameEnum**](PolicyNameEnum.md) |  | [optional] 
**predefined_policies** | [**List[ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration]**](ApplicationGatewayPathRulePropertiesFormatRedirectConfiguration.md) | List of available Ssl predefined policy. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_available_ssl_options_properties_format import ApplicationGatewayAvailableSslOptionsPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayAvailableSslOptionsPropertiesFormat from a JSON string
application_gateway_available_ssl_options_properties_format_instance = ApplicationGatewayAvailableSslOptionsPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayAvailableSslOptionsPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_available_ssl_options_properties_format_dict = application_gateway_available_ssl_options_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayAvailableSslOptionsPropertiesFormat from a dict
application_gateway_available_ssl_options_properties_format_from_dict = ApplicationGatewayAvailableSslOptionsPropertiesFormat.from_dict(application_gateway_available_ssl_options_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


