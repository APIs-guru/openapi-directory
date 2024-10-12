# CertificateListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CertificateListByServiceDefaultResponseError**](CertificateListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_list_by_service_default_response import CertificateListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateListByServiceDefaultResponse from a JSON string
certificate_list_by_service_default_response_instance = CertificateListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(CertificateListByServiceDefaultResponse.to_json())

# convert the object into a dict
certificate_list_by_service_default_response_dict = certificate_list_by_service_default_response_instance.to_dict()
# create an instance of CertificateListByServiceDefaultResponse from a dict
certificate_list_by_service_default_response_from_dict = CertificateListByServiceDefaultResponse.from_dict(certificate_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


