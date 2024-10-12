# RuleChangeRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**actions** | **List[str]** |  | [optional] 
**author** | [**UserRead**](UserRead.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**examples** | **List[str]** |  | [optional] 
**formatted_source** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**markers** | [**List[MarkerRead]**](MarkerRead.md) |  | [optional] 
**match_on_response_status** | **int** |  | [optional] 
**rank** | **int** |  | 
**rule_id** | **str** |  | [optional] 
**source** | **str** |  | 

## Example

```python
from openapi_client.models.rule_change_read import RuleChangeRead

# TODO update the JSON string below
json = "{}"
# create an instance of RuleChangeRead from a JSON string
rule_change_read_instance = RuleChangeRead.from_json(json)
# print the JSON string representation of the object
print(RuleChangeRead.to_json())

# convert the object into a dict
rule_change_read_dict = rule_change_read_instance.to_dict()
# create an instance of RuleChangeRead from a dict
rule_change_read_from_dict = RuleChangeRead.from_dict(rule_change_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


