# CertificateGet200Response

Certificate details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CertificateListByService200ResponseValueInnerProperties**](CertificateListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_get200_response import CertificateGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateGet200Response from a JSON string
certificate_get200_response_instance = CertificateGet200Response.from_json(json)
# print the JSON string representation of the object
print(CertificateGet200Response.to_json())

# convert the object into a dict
certificate_get200_response_dict = certificate_get200_response_instance.to_dict()
# create an instance of CertificateGet200Response from a dict
certificate_get200_response_from_dict = CertificateGet200Response.from_dict(certificate_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


