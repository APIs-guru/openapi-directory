# ApplicationGatewayAuthenticationCertificatePropertiesFormat

Properties of Authentication certificates of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Certificate public data  | [optional] 
**provisioning_state** | **str** | Provisioning state of the authentication certificate resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.application_gateway_authentication_certificate_properties_format import ApplicationGatewayAuthenticationCertificatePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayAuthenticationCertificatePropertiesFormat from a JSON string
application_gateway_authentication_certificate_properties_format_instance = ApplicationGatewayAuthenticationCertificatePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayAuthenticationCertificatePropertiesFormat.to_json())

# convert the object into a dict
application_gateway_authentication_certificate_properties_format_dict = application_gateway_authentication_certificate_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayAuthenticationCertificatePropertiesFormat from a dict
application_gateway_authentication_certificate_properties_format_from_dict = ApplicationGatewayAuthenticationCertificatePropertiesFormat.from_dict(application_gateway_authentication_certificate_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


