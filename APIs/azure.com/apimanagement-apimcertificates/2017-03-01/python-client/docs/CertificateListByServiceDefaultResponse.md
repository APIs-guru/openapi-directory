# CertificateListByServiceDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[CertificateListByServiceDefaultResponseDetailsInner]**](CertificateListByServiceDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

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


