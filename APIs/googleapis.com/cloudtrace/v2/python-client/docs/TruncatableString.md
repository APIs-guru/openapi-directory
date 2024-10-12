# TruncatableString

Represents a string that might be shortened to a specified length.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**truncated_byte_count** | **int** | The number of bytes removed from the original string. If this value is 0, then the string was not shortened. | [optional] 
**value** | **str** | The shortened string. For example, if the original string is 500 bytes long and the limit of the string is 128 bytes, then &#x60;value&#x60; contains the first 128 bytes of the 500-byte string. Truncation always happens on a UTF8 character boundary. If there are multi-byte characters in the string, then the length of the shortened string might be less than the size limit. | [optional] 

## Example

```python
from openapi_client.models.truncatable_string import TruncatableString

# TODO update the JSON string below
json = "{}"
# create an instance of TruncatableString from a JSON string
truncatable_string_instance = TruncatableString.from_json(json)
# print the JSON string representation of the object
print(TruncatableString.to_json())

# convert the object into a dict
truncatable_string_dict = truncatable_string_instance.to_dict()
# create an instance of TruncatableString from a dict
truncatable_string_from_dict = TruncatableString.from_dict(truncatable_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


