# AdlsFileAlreadyExistsException

A WebHDFS exception thrown indicating the file or folder already exists. Thrown when a 403 error response code is returned (forbidden).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_file_already_exists_exception import AdlsFileAlreadyExistsException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsFileAlreadyExistsException from a JSON string
adls_file_already_exists_exception_instance = AdlsFileAlreadyExistsException.from_json(json)
# print the JSON string representation of the object
print(AdlsFileAlreadyExistsException.to_json())

# convert the object into a dict
adls_file_already_exists_exception_dict = adls_file_already_exists_exception_instance.to_dict()
# create an instance of AdlsFileAlreadyExistsException from a dict
adls_file_already_exists_exception_from_dict = AdlsFileAlreadyExistsException.from_dict(adls_file_already_exists_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


