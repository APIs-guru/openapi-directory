# CertificateCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CertificateCreateRequestData**](CertificateCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.certificate_create_request import CertificateCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCreateRequest from a JSON string
certificate_create_request_instance = CertificateCreateRequest.from_json(json)
# print the JSON string representation of the object
print(CertificateCreateRequest.to_json())

# convert the object into a dict
certificate_create_request_dict = certificate_create_request_instance.to_dict()
# create an instance of CertificateCreateRequest from a dict
certificate_create_request_from_dict = CertificateCreateRequest.from_dict(certificate_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


