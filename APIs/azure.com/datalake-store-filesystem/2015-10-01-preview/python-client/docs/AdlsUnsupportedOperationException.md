# AdlsUnsupportedOperationException

A WebHDFS exception thrown indicating that the requested operation is not supported. Thrown when a 400 error response code is returned (bad request).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_unsupported_operation_exception import AdlsUnsupportedOperationException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsUnsupportedOperationException from a JSON string
adls_unsupported_operation_exception_instance = AdlsUnsupportedOperationException.from_json(json)
# print the JSON string representation of the object
print(AdlsUnsupportedOperationException.to_json())

# convert the object into a dict
adls_unsupported_operation_exception_dict = adls_unsupported_operation_exception_instance.to_dict()
# create an instance of AdlsUnsupportedOperationException from a dict
adls_unsupported_operation_exception_from_dict = AdlsUnsupportedOperationException.from_dict(adls_unsupported_operation_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


