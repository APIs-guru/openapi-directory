# CertificateBodyDescription

The JSON-serialized X509 Certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | Base-64 representation of the X509 leaf certificate .cer file or just .pem file content. | [optional] 

## Example

```python
from openapi_client.models.certificate_body_description import CertificateBodyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateBodyDescription from a JSON string
certificate_body_description_instance = CertificateBodyDescription.from_json(json)
# print the JSON string representation of the object
print(CertificateBodyDescription.to_json())

# convert the object into a dict
certificate_body_description_dict = certificate_body_description_instance.to_dict()
# create an instance of CertificateBodyDescription from a dict
certificate_body_description_from_dict = CertificateBodyDescription.from_dict(certificate_body_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


