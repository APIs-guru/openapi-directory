# SpanScore

This is a single score for a given span of text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin** | **int** | \&quot;begin\&quot; and \&quot;end\&quot; describe the span of the original text that the attribute score applies to. The values are the UTF-16 codepoint range. \&quot;end\&quot; is exclusive. For example, with the text \&quot;Hi there\&quot;, the begin/end pair (0,2) describes the text \&quot;Hi\&quot;. If \&quot;begin\&quot; and \&quot;end\&quot; are unset, the score applies to the full text. | [optional] 
**end** | **int** |  | [optional] 
**score** | [**Score**](Score.md) |  | [optional] 

## Example

```python
from openapi_client.models.span_score import SpanScore

# TODO update the JSON string below
json = "{}"
# create an instance of SpanScore from a JSON string
span_score_instance = SpanScore.from_json(json)
# print the JSON string representation of the object
print(SpanScore.to_json())

# convert the object into a dict
span_score_dict = span_score_instance.to_dict()
# create an instance of SpanScore from a dict
span_score_from_dict = SpanScore.from_dict(span_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


