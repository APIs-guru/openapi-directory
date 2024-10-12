# StringMatcher

Specifies the way to match a string. [#next-free-field: 7]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact** | **str** | The input string must match exactly the string specified here. Examples: * *abc* only matches the value *abc*. | [optional] 
**ignore_case** | **bool** | If true, indicates the exact/prefix/suffix matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher *data* will match both input string *Data* and *data* if set to true. | [optional] 
**prefix** | **str** | The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *abc.xyz* | [optional] 
**regex** | **str** | The input string must match the regular expression specified here. The regex grammar is defined &#x60;here &#x60;_. Examples: * The regex &#x60;&#x60;\\d{3}&#x60;&#x60; matches the value *123* * The regex &#x60;&#x60;\\d{3}&#x60;&#x60; does not match the value *1234* * The regex &#x60;&#x60;\\d{3}&#x60;&#x60; does not match the value *123.456* .. attention:: This field has been deprecated in favor of &#x60;safe_regex&#x60; as it is not safe for use with untrusted input in all cases. | [optional] 
**safe_regex** | [**RegexMatcher**](RegexMatcher.md) |  | [optional] 
**suffix** | **str** | The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *xyz.abc* | [optional] 

## Example

```python
from openapi_client.models.string_matcher import StringMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of StringMatcher from a JSON string
string_matcher_instance = StringMatcher.from_json(json)
# print the JSON string representation of the object
print(StringMatcher.to_json())

# convert the object into a dict
string_matcher_dict = string_matcher_instance.to_dict()
# create an instance of StringMatcher from a dict
string_matcher_from_dict = StringMatcher.from_dict(string_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


