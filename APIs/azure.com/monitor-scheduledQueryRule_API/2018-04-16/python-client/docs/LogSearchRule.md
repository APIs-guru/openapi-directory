# LogSearchRule

Log Search Rule Definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**Action**](Action.md) |  | 
**description** | **str** | The description of the Log Search rule. | [optional] 
**enabled** | **str** | The flag which indicates whether the Log Search rule is enabled. Value should be true or false | [optional] 
**last_updated_time** | **datetime** | Last time the rule was updated in IS08601 format. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the scheduled query rule | [optional] [readonly] 
**schedule** | [**Schedule**](Schedule.md) |  | [optional] 
**source** | [**Source**](Source.md) |  | 

## Example

```python
from openapi_client.models.log_search_rule import LogSearchRule

# TODO update the JSON string below
json = "{}"
# create an instance of LogSearchRule from a JSON string
log_search_rule_instance = LogSearchRule.from_json(json)
# print the JSON string representation of the object
print(LogSearchRule.to_json())

# convert the object into a dict
log_search_rule_dict = log_search_rule_instance.to_dict()
# create an instance of LogSearchRule from a dict
log_search_rule_from_dict = LogSearchRule.from_dict(log_search_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


