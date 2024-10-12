# AdlsIOException

A WebHDFS exception thrown indicating there was an IO (read or write) error. Thrown when a 403 error response code is returned (forbidden).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_io_exception import AdlsIOException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsIOException from a JSON string
adls_io_exception_instance = AdlsIOException.from_json(json)
# print the JSON string representation of the object
print(AdlsIOException.to_json())

# convert the object into a dict
adls_io_exception_dict = adls_io_exception_instance.to_dict()
# create an instance of AdlsIOException from a dict
adls_io_exception_from_dict = AdlsIOException.from_dict(adls_io_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


