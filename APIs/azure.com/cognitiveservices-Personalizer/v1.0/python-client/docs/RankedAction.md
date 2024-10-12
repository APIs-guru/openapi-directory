# RankedAction

A ranked action with its resulting probability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the action | [optional] [readonly] 
**probability** | **float** | Probability of the action | [optional] [readonly] 

## Example

```python
from openapi_client.models.ranked_action import RankedAction

# TODO update the JSON string below
json = "{}"
# create an instance of RankedAction from a JSON string
ranked_action_instance = RankedAction.from_json(json)
# print the JSON string representation of the object
print(RankedAction.to_json())

# convert the object into a dict
ranked_action_dict = ranked_action_instance.to_dict()
# create an instance of RankedAction from a dict
ranked_action_from_dict = RankedAction.from_dict(ranked_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


