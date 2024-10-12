# SuggestCommentScoreResponse

The comment score suggestion response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_token** | **str** | Same token from the original SuggestCommentScoreRequest. | [optional] 
**detected_languages** | **List[str]** | The list of languages detected from the comment text. | [optional] 
**requested_languages** | **List[str]** | The list of languages provided in the request. | [optional] 

## Example

```python
from openapi_client.models.suggest_comment_score_response import SuggestCommentScoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestCommentScoreResponse from a JSON string
suggest_comment_score_response_instance = SuggestCommentScoreResponse.from_json(json)
# print the JSON string representation of the object
print(SuggestCommentScoreResponse.to_json())

# convert the object into a dict
suggest_comment_score_response_dict = suggest_comment_score_response_instance.to_dict()
# create an instance of SuggestCommentScoreResponse from a dict
suggest_comment_score_response_from_dict = SuggestCommentScoreResponse.from_dict(suggest_comment_score_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


