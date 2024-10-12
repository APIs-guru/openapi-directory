# CertificateCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_type** | [**CertificateType**](CertificateType.md) |  | 
**csr_content** | **str** |  | 

## Example

```python
from openapi_client.models.certificate_create_request_data_attributes import CertificateCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCreateRequestDataAttributes from a JSON string
certificate_create_request_data_attributes_instance = CertificateCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CertificateCreateRequestDataAttributes.to_json())

# convert the object into a dict
certificate_create_request_data_attributes_dict = certificate_create_request_data_attributes_instance.to_dict()
# create an instance of CertificateCreateRequestDataAttributes from a dict
certificate_create_request_data_attributes_from_dict = CertificateCreateRequestDataAttributes.from_dict(certificate_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


