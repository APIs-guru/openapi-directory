# AnalyzeCommentResponse

The comment analysis response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_scores** | [**Dict[str, AttributeScores]**](AttributeScores.md) | Scores for the requested attributes. The map keys are attribute names (same as the requested_attribute field in AnalyzeCommentRequest, for example \&quot;ATTACK_ON_AUTHOR\&quot;, \&quot;INFLAMMATORY\&quot;, etc). | [optional] 
**client_token** | **str** | Same token from the original AnalyzeCommentRequest. | [optional] 
**detected_languages** | **List[str]** | Contains the languages detected from the text content, sorted in order of likelihood. | [optional] 
**languages** | **List[str]** | The language(s) used by CommentAnalyzer service to choose which Model to use when analyzing the comment. Might better be called \&quot;effective_languages\&quot;. The logic used to make the choice is as follows: if !Request.languages.empty() effective_languages &#x3D; Request.languages else effective_languages &#x3D; detected_languages[0] | [optional] 

## Example

```python
from openapi_client.models.analyze_comment_response import AnalyzeCommentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeCommentResponse from a JSON string
analyze_comment_response_instance = AnalyzeCommentResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeCommentResponse.to_json())

# convert the object into a dict
analyze_comment_response_dict = analyze_comment_response_instance.to_dict()
# create an instance of AnalyzeCommentResponse from a dict
analyze_comment_response_from_dict = AnalyzeCommentResponse.from_dict(analyze_comment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


