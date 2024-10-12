# JsonPathMatcher

Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**json_matcher** | **str** | The type of JSONPath match that will be applied to the JSON output (ContentMatcher.content) | [optional] 
**json_path** | **str** | JSONPath within the response output pointing to the expected ContentMatcher::content to match against. | [optional] 

## Example

```python
from openapi_client.models.json_path_matcher import JsonPathMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of JsonPathMatcher from a JSON string
json_path_matcher_instance = JsonPathMatcher.from_json(json)
# print the JSON string representation of the object
print(JsonPathMatcher.to_json())

# convert the object into a dict
json_path_matcher_dict = json_path_matcher_instance.to_dict()
# create an instance of JsonPathMatcher from a dict
json_path_matcher_from_dict = JsonPathMatcher.from_dict(json_path_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


