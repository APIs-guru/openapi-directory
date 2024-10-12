# RegexMatcher

A regex matcher designed for safety when used with untrusted input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_re2** | [**GoogleRE2**](GoogleRE2.md) |  | [optional] 
**regex** | **str** | The regex match string. The string must be supported by the configured engine. The regex is matched against the full string, not as a partial match. | [optional] 

## Example

```python
from openapi_client.models.regex_matcher import RegexMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of RegexMatcher from a JSON string
regex_matcher_instance = RegexMatcher.from_json(json)
# print the JSON string representation of the object
print(RegexMatcher.to_json())

# convert the object into a dict
regex_matcher_dict = regex_matcher_instance.to_dict()
# create an instance of RegexMatcher from a dict
regex_matcher_from_dict = RegexMatcher.from_dict(regex_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


