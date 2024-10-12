# RuleChangeWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**actions** | **List[str]** |  | [optional] 
**examples** | **List[str]** |  | [optional] 
**formatted_source** | **str** |  | [optional] 
**markers** | [**List[MarkerWrite]**](MarkerWrite.md) |  | [optional] 
**match_on_response_status** | **int** |  | [optional] 
**rank** | **int** |  | 
**rule_id** | **str** |  | [optional] 
**source** | **str** |  | 

## Example

```python
from openapi_client.models.rule_change_write import RuleChangeWrite

# TODO update the JSON string below
json = "{}"
# create an instance of RuleChangeWrite from a JSON string
rule_change_write_instance = RuleChangeWrite.from_json(json)
# print the JSON string representation of the object
print(RuleChangeWrite.to_json())

# convert the object into a dict
rule_change_write_dict = rule_change_write_instance.to_dict()
# create an instance of RuleChangeWrite from a dict
rule_change_write_from_dict = RuleChangeWrite.from_dict(rule_change_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


