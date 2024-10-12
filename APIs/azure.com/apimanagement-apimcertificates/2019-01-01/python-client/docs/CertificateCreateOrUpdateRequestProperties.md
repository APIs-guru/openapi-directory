# CertificateCreateOrUpdateRequestProperties

Parameters supplied to the CreateOrUpdate certificate operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Base 64 encoded certificate using the application/x-pkcs12 representation. | 
**password** | **str** | Password for the Certificate | 

## Example

```python
from openapi_client.models.certificate_create_or_update_request_properties import CertificateCreateOrUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCreateOrUpdateRequestProperties from a JSON string
certificate_create_or_update_request_properties_instance = CertificateCreateOrUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateCreateOrUpdateRequestProperties.to_json())

# convert the object into a dict
certificate_create_or_update_request_properties_dict = certificate_create_or_update_request_properties_instance.to_dict()
# create an instance of CertificateCreateOrUpdateRequestProperties from a dict
certificate_create_or_update_request_properties_from_dict = CertificateCreateOrUpdateRequestProperties.from_dict(certificate_create_or_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


