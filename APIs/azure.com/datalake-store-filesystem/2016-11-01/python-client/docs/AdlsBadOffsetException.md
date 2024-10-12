# AdlsBadOffsetException

A WebHDFS exception thrown indicating the append or read is from a bad offset. Thrown when a 400 error response code is returned for append and open operations (Bad request).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_bad_offset_exception import AdlsBadOffsetException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsBadOffsetException from a JSON string
adls_bad_offset_exception_instance = AdlsBadOffsetException.from_json(json)
# print the JSON string representation of the object
print(AdlsBadOffsetException.to_json())

# convert the object into a dict
adls_bad_offset_exception_dict = adls_bad_offset_exception_instance.to_dict()
# create an instance of AdlsBadOffsetException from a dict
adls_bad_offset_exception_from_dict = AdlsBadOffsetException.from_dict(adls_bad_offset_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


