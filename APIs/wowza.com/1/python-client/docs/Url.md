# Url


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitrate** | **int** | The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than &lt;strong&gt;0&lt;/strong&gt;. | [optional] 
**created_at** | **datetime** | The date and time that the player URL was created. | [optional] 
**height** | **int** | The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than &lt;strong&gt;0&lt;/strong&gt;. | [optional] 
**id** | **str** | The unique alphanumeric string that identifies the player URL. | [optional] 
**label** | **str** | A descriptive name for the player URL. Maximum 255 characters. | [optional] 
**player_id** | **str** | The unique alphanumeric string that identifies the player. | [optional] 
**updated_at** | **datetime** | The date and time that the player URL was updated. | [optional] 
**url** | **str** | The URL of the player. If using a Wowza CDN target, the URL format is &#x60;http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m&#x60; for Adobe HDS playback or &#x60;http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8&#x60; for Apple HLS playback. | [optional] 
**width** | **int** | The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than &lt;strong&gt;0&lt;/strong&gt;. | [optional] 

## Example

```python
from openapi_client.models.url import Url

# TODO update the JSON string below
json = "{}"
# create an instance of Url from a JSON string
url_instance = Url.from_json(json)
# print the JSON string representation of the object
print(Url.to_json())

# convert the object into a dict
url_dict = url_instance.to_dict()
# create an instance of Url from a dict
url_from_dict = Url.from_dict(url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


