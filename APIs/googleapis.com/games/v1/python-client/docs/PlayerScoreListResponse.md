# PlayerScoreListResponse

A list of score submission statuses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerScoreListResponse&#x60;. | [optional] 
**submitted_scores** | [**List[PlayerScoreResponse]**](PlayerScoreResponse.md) | The score submissions statuses. | [optional] 

## Example

```python
from openapi_client.models.player_score_list_response import PlayerScoreListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerScoreListResponse from a JSON string
player_score_list_response_instance = PlayerScoreListResponse.from_json(json)
# print the JSON string representation of the object
print(PlayerScoreListResponse.to_json())

# convert the object into a dict
player_score_list_response_dict = player_score_list_response_instance.to_dict()
# create an instance of PlayerScoreListResponse from a dict
player_score_list_response_from_dict = PlayerScoreListResponse.from_dict(player_score_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


