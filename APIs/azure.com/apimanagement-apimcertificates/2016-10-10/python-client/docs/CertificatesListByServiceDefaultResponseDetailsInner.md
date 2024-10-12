# CertificatesListByServiceDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.certificates_list_by_service_default_response_details_inner import CertificatesListByServiceDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CertificatesListByServiceDefaultResponseDetailsInner from a JSON string
certificates_list_by_service_default_response_details_inner_instance = CertificatesListByServiceDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(CertificatesListByServiceDefaultResponseDetailsInner.to_json())

# convert the object into a dict
certificates_list_by_service_default_response_details_inner_dict = certificates_list_by_service_default_response_details_inner_instance.to_dict()
# create an instance of CertificatesListByServiceDefaultResponseDetailsInner from a dict
certificates_list_by_service_default_response_details_inner_from_dict = CertificatesListByServiceDefaultResponseDetailsInner.from_dict(certificates_list_by_service_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


