# Audio

Audio preprocessing configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_boost** | **bool** | Enable boosting high frequency components. The default is &#x60;false&#x60;. | [optional] 
**low_boost** | **bool** | Enable boosting low frequency components. The default is &#x60;false&#x60;. | [optional] 
**lufs** | **float** | Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0 (the default), where: * -24 is the Advanced Television Systems Committee (ATSC A/85) standard * -23 is the EU R128 broadcast standard * -19 is the prior standard for online mono audio * -18 is the ReplayGain standard * -16 is the prior standard for stereo audio * -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo * 0 disables normalization | [optional] 

## Example

```python
from openapi_client.models.audio import Audio

# TODO update the JSON string below
json = "{}"
# create an instance of Audio from a JSON string
audio_instance = Audio.from_json(json)
# print the JSON string representation of the object
print(Audio.to_json())

# convert the object into a dict
audio_dict = audio_instance.to_dict()
# create an instance of Audio from a dict
audio_from_dict = Audio.from_dict(audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


