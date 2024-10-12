# CallSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | [**AudioSettings**](AudioSettings.md) |  | [optional] 
**backstage** | [**BackstageSettings**](BackstageSettings.md) |  | [optional] 
**broadcasting** | [**BroadcastSettings**](BroadcastSettings.md) |  | [optional] 
**geofencing** | [**GeofenceSettings**](GeofenceSettings.md) |  | [optional] 
**recording** | [**RecordSettings**](RecordSettings.md) |  | [optional] 
**ring** | [**RingSettings**](RingSettings.md) |  | [optional] 
**screensharing** | [**ScreensharingSettings**](ScreensharingSettings.md) |  | [optional] 
**transcription** | [**TranscriptionSettings**](TranscriptionSettings.md) |  | [optional] 
**video** | [**VideoSettings**](VideoSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.call_settings import CallSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CallSettings from a JSON string
call_settings_instance = CallSettings.from_json(json)
# print the JSON string representation of the object
print(CallSettings.to_json())

# convert the object into a dict
call_settings_dict = call_settings_instance.to_dict()
# create an instance of CallSettings from a dict
call_settings_from_dict = CallSettings.from_dict(call_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


