# CertificateBaseProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx. | [optional] 
**thumbprint** | **str** | This must match the thumbprint from the name. | [optional] 
**thumbprint_algorithm** | **str** | This must match the first portion of the certificate name. Currently required to be &#39;SHA1&#39;. | [optional] 

## Example

```python
from openapi_client.models.certificate_base_properties import CertificateBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateBaseProperties from a JSON string
certificate_base_properties_instance = CertificateBaseProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateBaseProperties.to_json())

# convert the object into a dict
certificate_base_properties_dict = certificate_base_properties_instance.to_dict()
# create an instance of CertificateBaseProperties from a dict
certificate_base_properties_from_dict = CertificateBaseProperties.from_dict(certificate_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


