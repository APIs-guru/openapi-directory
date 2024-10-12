# LearningGenaiRootScoredToken

A token with its own score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_token_score** | **float** | Each end_token_score is a logprob for how well the completion would end at a particular token. See http://google3/labs/language/aida/config/proto/model_config.proto;l&#x3D;376;rcl&#x3D;573039459 | [optional] 
**score** | **float** | Each score is the logprob for the token in model response. | [optional] 
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_scored_token import LearningGenaiRootScoredToken

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootScoredToken from a JSON string
learning_genai_root_scored_token_instance = LearningGenaiRootScoredToken.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootScoredToken.to_json())

# convert the object into a dict
learning_genai_root_scored_token_dict = learning_genai_root_scored_token_instance.to_dict()
# create an instance of LearningGenaiRootScoredToken from a dict
learning_genai_root_scored_token_from_dict = LearningGenaiRootScoredToken.from_dict(learning_genai_root_scored_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


