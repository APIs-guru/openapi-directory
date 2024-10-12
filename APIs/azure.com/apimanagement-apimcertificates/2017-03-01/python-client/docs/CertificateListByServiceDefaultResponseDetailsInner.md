# CertificateListByServiceDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.certificate_list_by_service_default_response_details_inner import CertificateListByServiceDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateListByServiceDefaultResponseDetailsInner from a JSON string
certificate_list_by_service_default_response_details_inner_instance = CertificateListByServiceDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(CertificateListByServiceDefaultResponseDetailsInner.to_json())

# convert the object into a dict
certificate_list_by_service_default_response_details_inner_dict = certificate_list_by_service_default_response_details_inner_instance.to_dict()
# create an instance of CertificateListByServiceDefaultResponseDetailsInner from a dict
certificate_list_by_service_default_response_details_inner_from_dict = CertificateListByServiceDefaultResponseDetailsInner.from_dict(certificate_list_by_service_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


