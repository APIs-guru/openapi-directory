# CertificateListByService200ResponseValueInnerProperties

Properties of the Certificate contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** | Expiration date of the certificate. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 
**subject** | **str** | Subject attribute of the certificate. | 
**thumbprint** | **str** | Thumbprint of the certificate. | 

## Example

```python
from openapi_client.models.certificate_list_by_service200_response_value_inner_properties import CertificateListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateListByService200ResponseValueInnerProperties from a JSON string
certificate_list_by_service200_response_value_inner_properties_instance = CertificateListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
certificate_list_by_service200_response_value_inner_properties_dict = certificate_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of CertificateListByService200ResponseValueInnerProperties from a dict
certificate_list_by_service200_response_value_inner_properties_from_dict = CertificateListByService200ResponseValueInnerProperties.from_dict(certificate_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


