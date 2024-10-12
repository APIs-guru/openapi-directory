# StatusRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**current_level** | [**RuleStatusLevel**](RuleStatusLevel.md) |  | [optional] 
**period** | **str** |  | [optional] 
**previous_level** | [**RuleStatusLevel**](RuleStatusLevel.md) |  | [optional] 

## Example

```python
from openapi_client.models.status_rule import StatusRule

# TODO update the JSON string below
json = "{}"
# create an instance of StatusRule from a JSON string
status_rule_instance = StatusRule.from_json(json)
# print the JSON string representation of the object
print(StatusRule.to_json())

# convert the object into a dict
status_rule_dict = status_rule_instance.to_dict()
# create an instance of StatusRule from a dict
status_rule_from_dict = StatusRule.from_dict(status_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


