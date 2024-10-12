# PlayerScoreSubmissionList

A list of score submission requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerScoreSubmissionList&#x60;. | [optional] 
**scores** | [**List[ScoreSubmission]**](ScoreSubmission.md) | The score submissions. | [optional] 

## Example

```python
from openapi_client.models.player_score_submission_list import PlayerScoreSubmissionList

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerScoreSubmissionList from a JSON string
player_score_submission_list_instance = PlayerScoreSubmissionList.from_json(json)
# print the JSON string representation of the object
print(PlayerScoreSubmissionList.to_json())

# convert the object into a dict
player_score_submission_list_dict = player_score_submission_list_instance.to_dict()
# create an instance of PlayerScoreSubmissionList from a dict
player_score_submission_list_from_dict = PlayerScoreSubmissionList.from_dict(player_score_submission_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


