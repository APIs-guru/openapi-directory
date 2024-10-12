# SetupAction

An action executed during setup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 
**launch_app** | [**LaunchAppAction**](LaunchAppAction.md) |  | [optional] 
**title** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.setup_action import SetupAction

# TODO update the JSON string below
json = "{}"
# create an instance of SetupAction from a JSON string
setup_action_instance = SetupAction.from_json(json)
# print the JSON string representation of the object
print(SetupAction.to_json())

# convert the object into a dict
setup_action_dict = setup_action_instance.to_dict()
# create an instance of SetupAction from a dict
setup_action_from_dict = SetupAction.from_dict(setup_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


