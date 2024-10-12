# CertificateProperties

Properties of the certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets the creation time. | [optional] [readonly] 
**description** | **str** | Gets or sets the description. | [optional] 
**expiry_time** | **datetime** | Gets the expiry time of the certificate. | [optional] [readonly] 
**is_exportable** | **bool** | Gets the is exportable flag of the certificate. | [optional] [readonly] 
**last_modified_time** | **datetime** | Gets the last modified time. | [optional] [readonly] 
**thumbprint** | **str** | Gets the thumbprint of the certificate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_properties import CertificateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateProperties from a JSON string
certificate_properties_instance = CertificateProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateProperties.to_json())

# convert the object into a dict
certificate_properties_dict = certificate_properties_instance.to_dict()
# create an instance of CertificateProperties from a dict
certificate_properties_from_dict = CertificateProperties.from_dict(certificate_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


