# DirectoryChromeosdevicesCommand

Information regarding a command that was issued to a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_expire_time** | **str** | The time at which the command will expire. If the device doesn&#39;t execute the command within this time the command will become expired. | [optional] 
**command_id** | **str** | Unique ID of a device command. | [optional] 
**command_result** | [**DirectoryChromeosdevicesCommandResult**](DirectoryChromeosdevicesCommandResult.md) |  | [optional] 
**issue_time** | **str** | The timestamp when the command was issued by the admin. | [optional] 
**payload** | **str** | The payload that the command specified, if any. | [optional] 
**state** | **str** | Indicates the command state. | [optional] 
**type** | **str** | The type of the command. | [optional] 

## Example

```python
from openapi_client.models.directory_chromeosdevices_command import DirectoryChromeosdevicesCommand

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryChromeosdevicesCommand from a JSON string
directory_chromeosdevices_command_instance = DirectoryChromeosdevicesCommand.from_json(json)
# print the JSON string representation of the object
print(DirectoryChromeosdevicesCommand.to_json())

# convert the object into a dict
directory_chromeosdevices_command_dict = directory_chromeosdevices_command_instance.to_dict()
# create an instance of DirectoryChromeosdevicesCommand from a dict
directory_chromeosdevices_command_from_dict = DirectoryChromeosdevicesCommand.from_dict(directory_chromeosdevices_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


