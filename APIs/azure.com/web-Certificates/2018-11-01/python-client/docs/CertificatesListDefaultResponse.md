# CertificatesListDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CertificatesListDefaultResponseError**](CertificatesListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificates_list_default_response import CertificatesListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CertificatesListDefaultResponse from a JSON string
certificates_list_default_response_instance = CertificatesListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(CertificatesListDefaultResponse.to_json())

# convert the object into a dict
certificates_list_default_response_dict = certificates_list_default_response_instance.to_dict()
# create an instance of CertificatesListDefaultResponse from a dict
certificates_list_default_response_from_dict = CertificatesListDefaultResponse.from_dict(certificates_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


