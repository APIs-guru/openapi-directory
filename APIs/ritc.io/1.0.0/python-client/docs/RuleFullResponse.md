# RuleFullResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) |  | [optional] 
**created_date** | **str** | The date the rule was created | [optional] 
**description** | **str** | Rule description | [optional] 
**id** | **int** | Rule Id | [optional] 
**modified_date** | **str** | The date the rule was modified | [optional] 
**name** | **str** | Rule name | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**triggers** | [**List[Trigger]**](Trigger.md) |  | [optional] 

## Example

```python
from openapi_client.models.rule_full_response import RuleFullResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RuleFullResponse from a JSON string
rule_full_response_instance = RuleFullResponse.from_json(json)
# print the JSON string representation of the object
print(RuleFullResponse.to_json())

# convert the object into a dict
rule_full_response_dict = rule_full_response_instance.to_dict()
# create an instance of RuleFullResponse from a dict
rule_full_response_from_dict = RuleFullResponse.from_dict(rule_full_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


