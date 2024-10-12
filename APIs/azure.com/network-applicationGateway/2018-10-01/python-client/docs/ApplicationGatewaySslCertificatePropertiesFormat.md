# ApplicationGatewaySslCertificatePropertiesFormat

Properties of SSL certificates of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Base-64 encoded pfx certificate. Only applicable in PUT Request. | [optional] 
**key_vault_secret_id** | **str** | Secret Id of (base-64 encoded unencrypted pfx) &#39;Secret&#39; or &#39;Certificate&#39; object stored in KeyVault. | [optional] 
**password** | **str** | Password for the pfx file specified in data. Only applicable in PUT request. | [optional] 
**provisioning_state** | **str** | Provisioning state of the SSL certificate resource Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**public_cert_data** | **str** | Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_ssl_certificate_properties_format import ApplicationGatewaySslCertificatePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewaySslCertificatePropertiesFormat from a JSON string
application_gateway_ssl_certificate_properties_format_instance = ApplicationGatewaySslCertificatePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewaySslCertificatePropertiesFormat.to_json())

# convert the object into a dict
application_gateway_ssl_certificate_properties_format_dict = application_gateway_ssl_certificate_properties_format_instance.to_dict()
# create an instance of ApplicationGatewaySslCertificatePropertiesFormat from a dict
application_gateway_ssl_certificate_properties_format_from_dict = ApplicationGatewaySslCertificatePropertiesFormat.from_dict(application_gateway_ssl_certificate_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


