# CertificateCreateOrUpdateRequest

Certificate create or update details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CertificateCreateOrUpdateRequestProperties**](CertificateCreateOrUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_create_or_update_request import CertificateCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCreateOrUpdateRequest from a JSON string
certificate_create_or_update_request_instance = CertificateCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(CertificateCreateOrUpdateRequest.to_json())

# convert the object into a dict
certificate_create_or_update_request_dict = certificate_create_or_update_request_instance.to_dict()
# create an instance of CertificateCreateOrUpdateRequest from a dict
certificate_create_or_update_request_from_dict = CertificateCreateOrUpdateRequest.from_dict(certificate_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


