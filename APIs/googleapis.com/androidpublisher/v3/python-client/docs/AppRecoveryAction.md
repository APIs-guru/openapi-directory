# AppRecoveryAction

Information about an app recovery action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_recovery_id** | **str** | ID corresponding to the app recovery action. | [optional] 
**cancel_time** | **str** | Timestamp of when the app recovery action is canceled by the developer. Only set if the recovery action has been canceled. | [optional] 
**create_time** | **str** | Timestamp of when the app recovery action is created by the developer. It is always set after creation of the recovery action. | [optional] 
**deploy_time** | **str** | Timestamp of when the app recovery action is deployed to the users. Only set if the recovery action has been deployed. | [optional] 
**last_update_time** | **str** | Timestamp of when the developer last updated recovery action. In case the action is cancelled, it corresponds to cancellation time. It is always set after creation of the recovery action. | [optional] 
**remote_in_app_update_data** | [**RemoteInAppUpdateData**](RemoteInAppUpdateData.md) |  | [optional] 
**status** | **str** | The status of the recovery action. | [optional] 
**targeting** | [**Targeting**](Targeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_recovery_action import AppRecoveryAction

# TODO update the JSON string below
json = "{}"
# create an instance of AppRecoveryAction from a JSON string
app_recovery_action_instance = AppRecoveryAction.from_json(json)
# print the JSON string representation of the object
print(AppRecoveryAction.to_json())

# convert the object into a dict
app_recovery_action_dict = app_recovery_action_instance.to_dict()
# create an instance of AppRecoveryAction from a dict
app_recovery_action_from_dict = AppRecoveryAction.from_dict(app_recovery_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


