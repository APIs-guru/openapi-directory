# CertificateRequest

Details of the certificate to be uploaded to the vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RawCertificateData**](RawCertificateData.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_request import CertificateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRequest from a JSON string
certificate_request_instance = CertificateRequest.from_json(json)
# print the JSON string representation of the object
print(CertificateRequest.to_json())

# convert the object into a dict
certificate_request_dict = certificate_request_instance.to_dict()
# create an instance of CertificateRequest from a dict
certificate_request_from_dict = CertificateRequest.from_dict(certificate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


