# AdlsIllegalArgumentException

A WebHDFS exception thrown indicating that one more arguments is incorrect. Thrown when a 400 error response code is returned (bad request).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_illegal_argument_exception import AdlsIllegalArgumentException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsIllegalArgumentException from a JSON string
adls_illegal_argument_exception_instance = AdlsIllegalArgumentException.from_json(json)
# print the JSON string representation of the object
print(AdlsIllegalArgumentException.to_json())

# convert the object into a dict
adls_illegal_argument_exception_dict = adls_illegal_argument_exception_instance.to_dict()
# create an instance of AdlsIllegalArgumentException from a dict
adls_illegal_argument_exception_from_dict = AdlsIllegalArgumentException.from_dict(adls_illegal_argument_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


