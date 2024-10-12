# AudioAd

Details for an audio ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_url** | **str** | The webpage address that appears with the ad. | [optional] 
**final_url** | **str** | The URL address of the webpage that people reach after they click the ad. | [optional] 
**tracking_url** | **str** | The URL address loaded in the background for tracking purposes. | [optional] 
**video** | [**YoutubeVideoDetails**](YoutubeVideoDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.audio_ad import AudioAd

# TODO update the JSON string below
json = "{}"
# create an instance of AudioAd from a JSON string
audio_ad_instance = AudioAd.from_json(json)
# print the JSON string representation of the object
print(AudioAd.to_json())

# convert the object into a dict
audio_ad_dict = audio_ad_instance.to_dict()
# create an instance of AudioAd from a dict
audio_ad_from_dict = AudioAd.from_dict(audio_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


