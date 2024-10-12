# DeleteCertificateError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**values** | [**List[NameValuePair]**](NameValuePair.md) | This list includes details such as the active pools and nodes referencing this certificate. However, if a large number of resources reference the certificate, the list contains only about the first hundred. | [optional] 

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


