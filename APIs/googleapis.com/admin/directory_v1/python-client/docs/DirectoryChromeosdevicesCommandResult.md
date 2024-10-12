# DirectoryChromeosdevicesCommandResult

The result of executing a command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_result_payload** | **str** | The payload for the command result. The following commands respond with a payload: * &#x60;DEVICE_START_CRD_SESSION&#x60;: Payload is a stringified JSON object in the form: { \&quot;url\&quot;: url }. The URL provides a link to the Chrome Remote Desktop session. | [optional] 
**error_message** | **str** | The error message with a short explanation as to why the command failed. Only present if the command failed. | [optional] 
**execute_time** | **str** | The time at which the command was executed or failed to execute. | [optional] 
**result** | **str** | The result of the command. | [optional] 

## Example

```python
from openapi_client.models.directory_chromeosdevices_command_result import DirectoryChromeosdevicesCommandResult

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryChromeosdevicesCommandResult from a JSON string
directory_chromeosdevices_command_result_instance = DirectoryChromeosdevicesCommandResult.from_json(json)
# print the JSON string representation of the object
print(DirectoryChromeosdevicesCommandResult.to_json())

# convert the object into a dict
directory_chromeosdevices_command_result_dict = directory_chromeosdevices_command_result_instance.to_dict()
# create an instance of DirectoryChromeosdevicesCommandResult from a dict
directory_chromeosdevices_command_result_from_dict = DirectoryChromeosdevicesCommandResult.from_dict(directory_chromeosdevices_command_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


