# CertificateCreateOrUpdateProperties

Certificate properties for create operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | The maximum size is 10KB. | 
**password** | **str** | This is required if the certificate format is pfx and must be omitted if the certificate format is cer. | [optional] 
**format** | **str** | The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx. | [optional] 
**thumbprint** | **str** | This must match the thumbprint from the name. | [optional] 
**thumbprint_algorithm** | **str** | This must match the first portion of the certificate name. Currently required to be &#39;SHA1&#39;. | [optional] 

## Example

```python
from openapi_client.models.certificate_create_or_update_properties import CertificateCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCreateOrUpdateProperties from a JSON string
certificate_create_or_update_properties_instance = CertificateCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateCreateOrUpdateProperties.to_json())

# convert the object into a dict
certificate_create_or_update_properties_dict = certificate_create_or_update_properties_instance.to_dict()
# create an instance of CertificateCreateOrUpdateProperties from a dict
certificate_create_or_update_properties_from_dict = CertificateCreateOrUpdateProperties.from_dict(certificate_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


