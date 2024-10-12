# PlayMediaControl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | [**PlayMediaControlActivity**](PlayMediaControlActivity.md) |  | [optional] 
**commands** | [**PlayMediaControlCommandSet**](PlayMediaControlCommandSet.md) |  | [optional] 
**scheme** | [**PlayMediaControlScheme**](PlayMediaControlScheme.md) |  | 

## Example

```python
from openapi_client.models.play_media_control import PlayMediaControl

# TODO update the JSON string below
json = "{}"
# create an instance of PlayMediaControl from a JSON string
play_media_control_instance = PlayMediaControl.from_json(json)
# print the JSON string representation of the object
print(PlayMediaControl.to_json())

# convert the object into a dict
play_media_control_dict = play_media_control_instance.to_dict()
# create an instance of PlayMediaControl from a dict
play_media_control_from_dict = PlayMediaControl.from_dict(play_media_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


