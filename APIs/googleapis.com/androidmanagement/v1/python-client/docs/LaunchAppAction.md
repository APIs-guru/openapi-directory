# LaunchAppAction

An action to launch an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_name** | **str** | Package name of app to be launched | [optional] 

## Example

```python
from openapi_client.models.launch_app_action import LaunchAppAction

# TODO update the JSON string below
json = "{}"
# create an instance of LaunchAppAction from a JSON string
launch_app_action_instance = LaunchAppAction.from_json(json)
# print the JSON string representation of the object
print(LaunchAppAction.to_json())

# convert the object into a dict
launch_app_action_dict = launch_app_action_instance.to_dict()
# create an instance of LaunchAppAction from a dict
launch_app_action_from_dict = LaunchAppAction.from_dict(launch_app_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


