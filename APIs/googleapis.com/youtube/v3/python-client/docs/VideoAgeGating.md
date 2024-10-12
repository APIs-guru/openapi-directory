# VideoAgeGating


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alcohol_content** | **bool** | Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content. | [optional] 
**restricted** | **bool** | Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won&#39;t be present. | [optional] 
**video_game_rating** | **str** | Video game rating, if any. | [optional] 

## Example

```python
from openapi_client.models.video_age_gating import VideoAgeGating

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAgeGating from a JSON string
video_age_gating_instance = VideoAgeGating.from_json(json)
# print the JSON string representation of the object
print(VideoAgeGating.to_json())

# convert the object into a dict
video_age_gating_dict = video_age_gating_instance.to_dict()
# create an instance of VideoAgeGating from a dict
video_age_gating_from_dict = VideoAgeGating.from_dict(video_age_gating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


