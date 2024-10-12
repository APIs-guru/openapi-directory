# Url1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitrate** | **int** | The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than &lt;strong&gt;0&lt;/strong&gt;. | [optional] 
**height** | **int** | The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than &lt;strong&gt;0&lt;/strong&gt;. | [optional] 
**label** | **str** | A descriptive name for the player URL. Maximum 255 characters. | [optional] 
**url** | **str** | The URL of the player. If using a Wowza CDN target, the URL format is &#x60;http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m&#x60; for Adobe HDS playback or &#x60;http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8&#x60; for Apple HLS playback. | [optional] 
**width** | **int** | The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than &lt;strong&gt;0&lt;/strong&gt;. | [optional] 

## Example

```python
from openapi_client.models.url1 import Url1

# TODO update the JSON string below
json = "{}"
# create an instance of Url1 from a JSON string
url1_instance = Url1.from_json(json)
# print the JSON string representation of the object
print(Url1.to_json())

# convert the object into a dict
url1_dict = url1_instance.to_dict()
# create an instance of Url1 from a dict
url1_from_dict = Url1.from_dict(url1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


