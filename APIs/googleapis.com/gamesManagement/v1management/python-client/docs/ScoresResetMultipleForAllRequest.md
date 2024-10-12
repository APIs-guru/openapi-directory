# ScoresResetMultipleForAllRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#scoresResetMultipleForAllRequest&#x60;. | [optional] 
**leaderboard_ids** | **List[str]** | The IDs of leaderboards to reset. | [optional] 

## Example

```python
from openapi_client.models.scores_reset_multiple_for_all_request import ScoresResetMultipleForAllRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScoresResetMultipleForAllRequest from a JSON string
scores_reset_multiple_for_all_request_instance = ScoresResetMultipleForAllRequest.from_json(json)
# print the JSON string representation of the object
print(ScoresResetMultipleForAllRequest.to_json())

# convert the object into a dict
scores_reset_multiple_for_all_request_dict = scores_reset_multiple_for_all_request_instance.to_dict()
# create an instance of ScoresResetMultipleForAllRequest from a dict
scores_reset_multiple_for_all_request_from_dict = ScoresResetMultipleForAllRequest.from_dict(scores_reset_multiple_for_all_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


