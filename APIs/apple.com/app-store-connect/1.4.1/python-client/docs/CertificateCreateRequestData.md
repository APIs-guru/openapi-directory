# CertificateCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CertificateCreateRequestDataAttributes**](CertificateCreateRequestDataAttributes.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.certificate_create_request_data import CertificateCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCreateRequestData from a JSON string
certificate_create_request_data_instance = CertificateCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(CertificateCreateRequestData.to_json())

# convert the object into a dict
certificate_create_request_data_dict = certificate_create_request_data_instance.to_dict()
# create an instance of CertificateCreateRequestData from a dict
certificate_create_request_data_from_dict = CertificateCreateRequestData.from_dict(certificate_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


