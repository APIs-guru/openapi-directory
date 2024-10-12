# RankableAction

An action with it's associated features used for ranking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | **List[object]** | List of dictionaries containing features. | 
**id** | **str** | Id of the action. | 

## Example

```python
from openapi_client.models.rankable_action import RankableAction

# TODO update the JSON string below
json = "{}"
# create an instance of RankableAction from a JSON string
rankable_action_instance = RankableAction.from_json(json)
# print the JSON string representation of the object
print(RankableAction.to_json())

# convert the object into a dict
rankable_action_dict = rankable_action_instance.to_dict()
# create an instance of RankableAction from a dict
rankable_action_from_dict = RankableAction.from_dict(rankable_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


