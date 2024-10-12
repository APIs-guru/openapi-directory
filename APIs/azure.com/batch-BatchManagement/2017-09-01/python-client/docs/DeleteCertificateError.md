# DeleteCertificateError

An error response from the Batch service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | 
**details** | [**List[DeleteCertificateError]**](DeleteCertificateError.md) | A list of additional details about the error. | [optional] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | 
**target** | **str** | The target of the particular error. For example, the name of the property in error. | [optional] 

## Example

```python
from openapi_client.models.delete_certificate_error import DeleteCertificateError

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteCertificateError from a JSON string
delete_certificate_error_instance = DeleteCertificateError.from_json(json)
# print the JSON string representation of the object
print(DeleteCertificateError.to_json())

# convert the object into a dict
delete_certificate_error_dict = delete_certificate_error_instance.to_dict()
# create an instance of DeleteCertificateError from a dict
delete_certificate_error_from_dict = DeleteCertificateError.from_dict(delete_certificate_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


