# PretargetingConfigVideoPlayerSizesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratio** | **str** | The type of aspect ratio. Leave this field blank to match all aspect ratios. | [optional] 
**min_height** | **str** | The minimum player height in pixels. Leave this field blank to match any player height. | [optional] 
**min_width** | **str** | The minimum player width in pixels. Leave this field blank to match any player width. | [optional] 

## Example

```python
from openapi_client.models.pretargeting_config_video_player_sizes_inner import PretargetingConfigVideoPlayerSizesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PretargetingConfigVideoPlayerSizesInner from a JSON string
pretargeting_config_video_player_sizes_inner_instance = PretargetingConfigVideoPlayerSizesInner.from_json(json)
# print the JSON string representation of the object
print(PretargetingConfigVideoPlayerSizesInner.to_json())

# convert the object into a dict
pretargeting_config_video_player_sizes_inner_dict = pretargeting_config_video_player_sizes_inner_instance.to_dict()
# create an instance of PretargetingConfigVideoPlayerSizesInner from a dict
pretargeting_config_video_player_sizes_inner_from_dict = PretargetingConfigVideoPlayerSizesInner.from_dict(pretargeting_config_video_player_sizes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


