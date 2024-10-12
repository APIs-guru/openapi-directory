# RuleListResult

The response of the List rule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of rules | [optional] 
**value** | [**List[Rule]**](Rule.md) | Result of the List Rules operation. | [optional] 

## Example

```python
from openapi_client.models.rule_list_result import RuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RuleListResult from a JSON string
rule_list_result_instance = RuleListResult.from_json(json)
# print the JSON string representation of the object
print(RuleListResult.to_json())

# convert the object into a dict
rule_list_result_dict = rule_list_result_instance.to_dict()
# create an instance of RuleListResult from a dict
rule_list_result_from_dict = RuleListResult.from_dict(rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


