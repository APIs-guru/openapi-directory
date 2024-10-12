# CertificatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Certificate]**](Certificate.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificates_response import CertificatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CertificatesResponse from a JSON string
certificates_response_instance = CertificatesResponse.from_json(json)
# print the JSON string representation of the object
print(CertificatesResponse.to_json())

# convert the object into a dict
certificates_response_dict = certificates_response_instance.to_dict()
# create an instance of CertificatesResponse from a dict
certificates_response_from_dict = CertificatesResponse.from_dict(certificates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


