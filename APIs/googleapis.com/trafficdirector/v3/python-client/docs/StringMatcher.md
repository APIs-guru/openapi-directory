# StringMatcher

Specifies the way to match a string. [#next-free-field: 8]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains** | **str** | The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead. Examples: * &#x60;&#x60;abc&#x60;&#x60; matches the value &#x60;&#x60;xyz.abc.def&#x60;&#x60; | [optional] 
**exact** | **str** | The input string must match exactly the string specified here. Examples: * &#x60;&#x60;abc&#x60;&#x60; only matches the value &#x60;&#x60;abc&#x60;&#x60;. | [optional] 
**ignore_case** | **bool** | If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher &#x60;&#x60;data&#x60;&#x60; will match both input string &#x60;&#x60;Data&#x60;&#x60; and &#x60;&#x60;data&#x60;&#x60; if set to true. | [optional] 
**prefix** | **str** | The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * &#x60;&#x60;abc&#x60;&#x60; matches the value &#x60;&#x60;abc.xyz&#x60;&#x60; | [optional] 
**safe_regex** | [**RegexMatcher**](RegexMatcher.md) |  | [optional] 
**suffix** | **str** | The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * &#x60;&#x60;abc&#x60;&#x60; matches the value &#x60;&#x60;xyz.abc&#x60;&#x60; | [optional] 

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


