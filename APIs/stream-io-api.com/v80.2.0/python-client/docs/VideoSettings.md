# VideoSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_enabled** | **bool** |  | 
**enabled** | **bool** |  | 

## Example

```python
from openapi_client.models.video_settings import VideoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VideoSettings from a JSON string
video_settings_instance = VideoSettings.from_json(json)
# print the JSON string representation of the object
print(VideoSettings.to_json())

# convert the object into a dict
video_settings_dict = video_settings_instance.to_dict()
# create an instance of VideoSettings from a dict
video_settings_from_dict = VideoSettings.from_dict(video_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


