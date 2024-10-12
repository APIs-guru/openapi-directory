# VideoTargeting

Represents targeting information about video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_position_types** | **List[str]** | A list of video positions to be excluded. When this field is populated, the targeted_position_types field must be empty. | [optional] 
**targeted_position_types** | **List[str]** | A list of video positions to be included. When this field is populated, the excluded_position_types field must be empty. | [optional] 

## Example

```python
from openapi_client.models.video_targeting import VideoTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of VideoTargeting from a JSON string
video_targeting_instance = VideoTargeting.from_json(json)
# print the JSON string representation of the object
print(VideoTargeting.to_json())

# convert the object into a dict
video_targeting_dict = video_targeting_instance.to_dict()
# create an instance of VideoTargeting from a dict
video_targeting_from_dict = VideoTargeting.from_dict(video_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


