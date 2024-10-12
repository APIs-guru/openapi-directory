# AutomationAction

The action that should be triggered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | The type of the action that will be triggered by the Automation | 

## Example

```python
from openapi_client.models.automation_action import AutomationAction

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationAction from a JSON string
automation_action_instance = AutomationAction.from_json(json)
# print the JSON string representation of the object
print(AutomationAction.to_json())

# convert the object into a dict
automation_action_dict = automation_action_instance.to_dict()
# create an instance of AutomationAction from a dict
automation_action_from_dict = AutomationAction.from_dict(automation_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


