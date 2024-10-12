# AutomationActionLogicApp

The logic app action that should be triggered. To learn more about Security Center's Workflow Automation capabilities, visit https://aka.ms/ASCWorkflowAutomationLearnMore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logic_app_resource_id** | **str** | The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App | [optional] 
**uri** | **str** | The Logic App trigger URI endpoint (it will not be included in any response). | [optional] 

## Example

```python
from openapi_client.models.automation_action_logic_app import AutomationActionLogicApp

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationActionLogicApp from a JSON string
automation_action_logic_app_instance = AutomationActionLogicApp.from_json(json)
# print the JSON string representation of the object
print(AutomationActionLogicApp.to_json())

# convert the object into a dict
automation_action_logic_app_dict = automation_action_logic_app_instance.to_dict()
# create an instance of AutomationActionLogicApp from a dict
automation_action_logic_app_from_dict = AutomationActionLogicApp.from_dict(automation_action_logic_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


