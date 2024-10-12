# MatchCondition

Define a match condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_value** | **List[str]** | List of possible match values. | 
**match_variable** | **str** | Request variable to compare with. | 
**negate_condition** | **bool** | Describes if the result of this condition should be negated. | [optional] 
**operator** | **str** | Comparison type to use for matching with the variable value. | 
**selector** | **str** | Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null. | [optional] 
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


