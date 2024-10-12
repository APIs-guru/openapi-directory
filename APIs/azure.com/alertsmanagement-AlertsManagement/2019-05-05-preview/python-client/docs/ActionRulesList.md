# ActionRulesList

List of action rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to fetch the next set of action rules | [optional] 
**value** | [**List[ActionRule]**](ActionRule.md) | List of action rules | [optional] 

## Example

```python
from openapi_client.models.action_rules_list import ActionRulesList

# TODO update the JSON string below
json = "{}"
# create an instance of ActionRulesList from a JSON string
action_rules_list_instance = ActionRulesList.from_json(json)
# print the JSON string representation of the object
print(ActionRulesList.to_json())

# convert the object into a dict
action_rules_list_dict = action_rules_list_instance.to_dict()
# create an instance of ActionRulesList from a dict
action_rules_list_from_dict = ActionRulesList.from_dict(action_rules_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


