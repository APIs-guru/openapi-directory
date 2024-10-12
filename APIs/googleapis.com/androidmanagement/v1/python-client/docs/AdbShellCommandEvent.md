# AdbShellCommandEvent

A shell command was issued over ADB via “adb shell command”.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shell_cmd** | **str** | Shell command that was issued over ADB via \&quot;adb shell command\&quot;. Redacted to empty string on organization-owned managed profile devices. | [optional] 

## Example

```python
from openapi_client.models.adb_shell_command_event import AdbShellCommandEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AdbShellCommandEvent from a JSON string
adb_shell_command_event_instance = AdbShellCommandEvent.from_json(json)
# print the JSON string representation of the object
print(AdbShellCommandEvent.to_json())

# convert the object into a dict
adb_shell_command_event_dict = adb_shell_command_event_instance.to_dict()
# create an instance of AdbShellCommandEvent from a dict
adb_shell_command_event_from_dict = AdbShellCommandEvent.from_dict(adb_shell_command_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


