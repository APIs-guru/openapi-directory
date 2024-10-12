# CertificateUpdateProperties

The properties of the update certificate operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the certificate. | [optional] 

## Example

```python
from openapi_client.models.certificate_update_properties import CertificateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateUpdateProperties from a JSON string
certificate_update_properties_instance = CertificateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateUpdateProperties.to_json())

# convert the object into a dict
certificate_update_properties_dict = certificate_update_properties_instance.to_dict()
# create an instance of CertificateUpdateProperties from a dict
certificate_update_properties_from_dict = CertificateUpdateProperties.from_dict(certificate_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


