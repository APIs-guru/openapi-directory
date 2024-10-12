# Snippet

Snippet of the search result, which summarizes the content of the resulting page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_ranges** | [**List[MatchRange]**](MatchRange.md) | The matched ranges in the snippet. | [optional] 
**snippet** | **str** | The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering. | [optional] 

## Example

```python
from openapi_client.models.snippet import Snippet

# TODO update the JSON string below
json = "{}"
# create an instance of Snippet from a JSON string
snippet_instance = Snippet.from_json(json)
# print the JSON string representation of the object
print(Snippet.to_json())

# convert the object into a dict
snippet_dict = snippet_instance.to_dict()
# create an instance of Snippet from a dict
snippet_from_dict = Snippet.from_dict(snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


