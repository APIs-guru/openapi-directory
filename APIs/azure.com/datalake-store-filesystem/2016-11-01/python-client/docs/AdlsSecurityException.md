# AdlsSecurityException

A WebHDFS exception thrown indicating that access is denied. Thrown when a 401 error response code is returned (Unauthorized).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_security_exception import AdlsSecurityException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsSecurityException from a JSON string
adls_security_exception_instance = AdlsSecurityException.from_json(json)
# print the JSON string representation of the object
print(AdlsSecurityException.to_json())

# convert the object into a dict
adls_security_exception_dict = adls_security_exception_instance.to_dict()
# create an instance of AdlsSecurityException from a dict
adls_security_exception_from_dict = AdlsSecurityException.from_dict(adls_security_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


