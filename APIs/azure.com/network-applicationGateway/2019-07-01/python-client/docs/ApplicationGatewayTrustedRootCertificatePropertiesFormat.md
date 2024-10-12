# ApplicationGatewayTrustedRootCertificatePropertiesFormat

Trusted Root certificates properties of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Certificate public data. | [optional] 
**key_vault_secret_id** | **str** | Secret Id of (base-64 encoded unencrypted pfx) &#39;Secret&#39; or &#39;Certificate&#39; object stored in KeyVault. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 

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


