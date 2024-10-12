# CertificateProperties

The description of an X509 CA Certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | The certificate content | [optional] 
**created** | **str** | The certificate&#39;s create date and time. | [optional] [readonly] 
**expiry** | **str** | The certificate&#39;s expiration date and time. | [optional] [readonly] 
**is_verified** | **bool** | Determines whether certificate has been verified. | [optional] [readonly] 
**subject** | **str** | The certificate&#39;s subject name. | [optional] [readonly] 
**thumbprint** | **str** | The certificate&#39;s thumbprint. | [optional] [readonly] 
**updated** | **str** | The certificate&#39;s last update date and time. | [optional] [readonly] 

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


