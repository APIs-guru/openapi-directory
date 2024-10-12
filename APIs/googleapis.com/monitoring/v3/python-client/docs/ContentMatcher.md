# ContentMatcher

Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | String, regex or JSON content to match. Maximum 1024 bytes. An empty content string indicates no content matching is to be performed. | [optional] 
**json_path_matcher** | [**JsonPathMatcher**](JsonPathMatcher.md) |  | [optional] 
**matcher** | **str** | The type of content matcher that will be applied to the server output, compared to the content string when the check is run. | [optional] 

## Example

```python
from openapi_client.models.content_matcher import ContentMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of ContentMatcher from a JSON string
content_matcher_instance = ContentMatcher.from_json(json)
# print the JSON string representation of the object
print(ContentMatcher.to_json())

# convert the object into a dict
content_matcher_dict = content_matcher_instance.to_dict()
# create an instance of ContentMatcher from a dict
content_matcher_from_dict = ContentMatcher.from_dict(content_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


