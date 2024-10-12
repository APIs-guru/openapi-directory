# AlertingAction

Specify action need to be taken when rule type is Alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azns_action** | [**AzNsActionGroup**](AzNsActionGroup.md) |  | [optional] 
**severity** | [**AlertSeverity**](AlertSeverity.md) |  | 
**throttling_in_min** | **int** | time (in minutes) for which Alerts should be throttled or suppressed. | [optional] 
**trigger** | [**TriggerCondition**](TriggerCondition.md) |  | 

## Example

```python
from openapi_client.models.alerting_action import AlertingAction

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingAction from a JSON string
alerting_action_instance = AlertingAction.from_json(json)
# print the JSON string representation of the object
print(AlertingAction.to_json())

# convert the object into a dict
alerting_action_dict = alerting_action_instance.to_dict()
# create an instance of AlertingAction from a dict
alerting_action_from_dict = AlertingAction.from_dict(alerting_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


