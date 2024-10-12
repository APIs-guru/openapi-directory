# FsCommand

FsCommand.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left** | **int** | Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. | [optional] 
**position_option** | **str** | Position in the browser where the window will open. | [optional] 
**top** | **int** | Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. | [optional] 
**window_height** | **int** | Height of the window. | [optional] 
**window_width** | **int** | Width of the window. | [optional] 

## Example

```python
from openapi_client.models.fs_command import FsCommand

# TODO update the JSON string below
json = "{}"
# create an instance of FsCommand from a JSON string
fs_command_instance = FsCommand.from_json(json)
# print the JSON string representation of the object
print(FsCommand.to_json())

# convert the object into a dict
fs_command_dict = fs_command_instance.to_dict()
# create an instance of FsCommand from a dict
fs_command_from_dict = FsCommand.from_dict(fs_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


