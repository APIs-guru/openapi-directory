# RankResponse

Returns which action to use as rewardActionId, and additional information about each action as a result of a Rank request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **str** | The eventId for the round trip from request to response. | [optional] [readonly] 
**ranking** | [**List[RankedAction]**](RankedAction.md) | The calculated ranking for the current request. | [optional] [readonly] 
**reward_action_id** | **str** | The action chosen by the Personalizer service. This is the action your application should display, and for which to report the reward. This might not be the  first found in &#39;ranking&#39; if an action in the request in first position was part of the excluded ids. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rank_response import RankResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RankResponse from a JSON string
rank_response_instance = RankResponse.from_json(json)
# print the JSON string representation of the object
print(RankResponse.to_json())

# convert the object into a dict
rank_response_dict = rank_response_instance.to_dict()
# create an instance of RankResponse from a dict
rank_response_from_dict = RankResponse.from_dict(rank_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


