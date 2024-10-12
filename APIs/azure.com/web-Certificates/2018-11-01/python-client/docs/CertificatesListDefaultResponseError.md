# CertificatesListDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[CertificatesListDefaultResponseErrorDetailsInner]**](CertificatesListDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificates_list_default_response_error import CertificatesListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of CertificatesListDefaultResponseError from a JSON string
certificates_list_default_response_error_instance = CertificatesListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(CertificatesListDefaultResponseError.to_json())

# convert the object into a dict
certificates_list_default_response_error_dict = certificates_list_default_response_error_instance.to_dict()
# create an instance of CertificatesListDefaultResponseError from a dict
certificates_list_default_response_error_from_dict = CertificatesListDefaultResponseError.from_dict(certificates_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


