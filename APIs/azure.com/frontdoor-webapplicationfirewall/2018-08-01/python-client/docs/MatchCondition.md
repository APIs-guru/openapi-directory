# MatchCondition

Define match conditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_value** | **List[str]** | Match value | 
**match_variable** | **str** | Match Variable | 
**negate_condition** | **bool** | Describes if this is negate condition or not | [optional] 
**operator** | **str** | Describes operator to be matched | 
**selector** | **str** | Name of selector in RequestHeader or RequestBody to be matched | [optional] 

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


