# ApplicationGatewaySslCertificatePropertiesFormat

Properties of SSL certificates of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | SSL Certificate data  | [optional] 
**password** | **str** | SSL Certificate password  | [optional] 
**provisioning_state** | **str** | Provisioning state of the ssl certificate resource Updating/Deleting/Failed | [optional] 
**public_cert_data** | **str** | SSL Certificate public data  | [optional] 

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


