# RuleRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** |  | [optional] 
**changes** | [**List[RuleChangeRead]**](RuleChangeRead.md) |  | [optional] 
**current_change** | [**RuleChangeRead**](RuleChangeRead.md) |  | [optional] 
**examples** | **List[str]** |  | [optional] 
**formatted_source** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**markers** | [**List[MarkerRead]**](MarkerRead.md) |  | [optional] 
**match_on_response_status** | **int** |  | [optional] 
**rank** | **int** |  | [optional] 
**source** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**view_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.rule_read import RuleRead

# TODO update the JSON string below
json = "{}"
# create an instance of RuleRead from a JSON string
rule_read_instance = RuleRead.from_json(json)
# print the JSON string representation of the object
print(RuleRead.to_json())

# convert the object into a dict
rule_read_dict = rule_read_instance.to_dict()
# create an instance of RuleRead from a dict
rule_read_from_dict = RuleRead.from_dict(rule_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


