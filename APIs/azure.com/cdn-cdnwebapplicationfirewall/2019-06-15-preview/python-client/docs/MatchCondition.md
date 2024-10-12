# MatchCondition

Define match conditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_value** | **List[str]** | List of possible match values. | 
**match_variable** | **str** | Match variable to compare against. | 
**negate_condition** | **bool** | Describes if the result of this condition should be negated. | [optional] 
**operator** | **str** | Describes operator to be matched | 
**selector** | **str** | Selector can used to match a specific key for QueryString, RequestUri, RequestHeaders or RequestBody. | [optional] 
**transforms** | [**List[TransformType]**](TransformType.md) | List of transforms. | [optional] 

## Example

```python
from openapi_client.models.match_condition import MatchCondition

# TODO update the JSON string below
json = "{}"
# create an instance of MatchCondition from a JSON string
match_condition_instance = MatchCondition.from_json(json)
# print the JSON string representation of the object
print(MatchCondition.to_json())

# convert the object into a dict
match_condition_dict = match_condition_instance.to_dict()
# create an instance of MatchCondition from a dict
match_condition_from_dict = MatchCondition.from_dict(match_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


