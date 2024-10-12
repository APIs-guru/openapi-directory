# ApplicationGatewayTrustedRootCertificatePropertiesFormat

Trusted Root certificates properties of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Certificate public data. | [optional] 
**keyvault_secret_id** | **str** | KeyVault Secret Id for certificate. | [optional] 
**provisioning_state** | **str** | Provisioning state of the trusted root certificate resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_trusted_root_certificate_properties_format import ApplicationGatewayTrustedRootCertificatePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayTrustedRootCertificatePropertiesFormat from a JSON string
application_gateway_trusted_root_certificate_properties_format_instance = ApplicationGatewayTrustedRootCertificatePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayTrustedRootCertificatePropertiesFormat.to_json())

# convert the object into a dict
application_gateway_trusted_root_certificate_properties_format_dict = application_gateway_trusted_root_certificate_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayTrustedRootCertificatePropertiesFormat from a dict
application_gateway_trusted_root_certificate_properties_format_from_dict = ApplicationGatewayTrustedRootCertificatePropertiesFormat.from_dict(application_gateway_trusted_root_certificate_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


