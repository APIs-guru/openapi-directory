# AdlsRuntimeException

A WebHDFS exception thrown when an unexpected error occurs during an operation. Thrown when a 500 error response code is returned (Internal server error).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_runtime_exception import AdlsRuntimeException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsRuntimeException from a JSON string
adls_runtime_exception_instance = AdlsRuntimeException.from_json(json)
# print the JSON string representation of the object
print(AdlsRuntimeException.to_json())

# convert the object into a dict
adls_runtime_exception_dict = adls_runtime_exception_instance.to_dict()
# create an instance of AdlsRuntimeException from a dict
adls_runtime_exception_from_dict = AdlsRuntimeException.from_dict(adls_runtime_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


