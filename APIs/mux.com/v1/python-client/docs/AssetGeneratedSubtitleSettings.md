# AssetGeneratedSubtitleSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The language to generate subtitles in. | [optional] [default to 'en']
**name** | **str** | A name for this subtitle track. | [optional] 
**passthrough** | **str** | Arbitrary metadata set for the subtitle track. Max 255 characters. | [optional] 

## Example

```python
from openapi_client.models.asset_generated_subtitle_settings import AssetGeneratedSubtitleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AssetGeneratedSubtitleSettings from a JSON string
asset_generated_subtitle_settings_instance = AssetGeneratedSubtitleSettings.from_json(json)
# print the JSON string representation of the object
print(AssetGeneratedSubtitleSettings.to_json())

# convert the object into a dict
asset_generated_subtitle_settings_dict = asset_generated_subtitle_settings_instance.to_dict()
# create an instance of AssetGeneratedSubtitleSettings from a dict
asset_generated_subtitle_settings_from_dict = AssetGeneratedSubtitleSettings.from_dict(asset_generated_subtitle_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


