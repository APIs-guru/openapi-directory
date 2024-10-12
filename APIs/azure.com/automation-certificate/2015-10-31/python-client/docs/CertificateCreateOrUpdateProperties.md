# CertificateCreateOrUpdateProperties

The properties of the create certificate operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base64_value** | **str** | Gets or sets the base64 encoded value of the certificate. | 
**description** | **str** | Gets or sets the description of the certificate. | [optional] 
**is_exportable** | **bool** | Gets or sets the is exportable flag of the certificate. | [optional] 
**thumbprint** | **str** | Gets or sets the thumbprint of the certificate. | [optional] 

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


