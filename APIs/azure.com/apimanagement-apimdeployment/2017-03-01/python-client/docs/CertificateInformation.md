# CertificateInformation

SSL certificate information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry** | **datetime** | Expiration date of the certificate. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard. | 
**subject** | **str** | Subject of the certificate. | 
**thumbprint** | **str** | Thumbprint of the certificate. | 

## Example

```python
from openapi_client.models.certificate_information import CertificateInformation

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateInformation from a JSON string
certificate_information_instance = CertificateInformation.from_json(json)
# print the JSON string representation of the object
print(CertificateInformation.to_json())

# convert the object into a dict
certificate_information_dict = certificate_information_instance.to_dict()
# create an instance of CertificateInformation from a dict
certificate_information_from_dict = CertificateInformation.from_dict(certificate_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


