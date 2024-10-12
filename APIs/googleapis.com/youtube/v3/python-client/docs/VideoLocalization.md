# VideoLocalization

Localized versions of certain video properties (e.g. title).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Localized version of the video&#39;s description. | [optional] 
**title** | **str** | Localized version of the video&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.video_localization import VideoLocalization

# TODO update the JSON string below
json = "{}"
# create an instance of VideoLocalization from a JSON string
video_localization_instance = VideoLocalization.from_json(json)
# print the JSON string representation of the object
print(VideoLocalization.to_json())

# convert the object into a dict
video_localization_dict = video_localization_instance.to_dict()
# create an instance of VideoLocalization from a dict
video_localization_from_dict = VideoLocalization.from_dict(video_localization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


