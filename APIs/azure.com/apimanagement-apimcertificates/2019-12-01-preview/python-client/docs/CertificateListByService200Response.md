# CertificateListByService200Response

Paged Certificates list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[CertificateListByService200ResponseValueInner]**](CertificateListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.certificate_list_by_service200_response import CertificateListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateListByService200Response from a JSON string
certificate_list_by_service200_response_instance = CertificateListByService200Response.from_json(json)
# print the JSON string representation of the object
print(CertificateListByService200Response.to_json())

# convert the object into a dict
certificate_list_by_service200_response_dict = certificate_list_by_service200_response_instance.to_dict()
# create an instance of CertificateListByService200Response from a dict
certificate_list_by_service200_response_from_dict = CertificateListByService200Response.from_dict(certificate_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


