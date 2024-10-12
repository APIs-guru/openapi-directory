# HashOfPlaybackURLs

Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. A hash of **hls**, **wowz**, and **ws** URLs that can be used by the player.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hls** | **str** | The web address that the ultra low latency target can use to play the Apple HLS stream. | [optional] 
**wowz** | **str** | The **wowz** and **wowzs** web addresses that the ultra low latency target can use to play WOWZ streams. | [optional] 
**ws** | **str** | The **ws** and **wss** web addresses that the ultra low latency target can use to play the WebSocket stream. | [optional] 

## Example

```python
from openapi_client.models.hash_of_playback_urls import HashOfPlaybackURLs

# TODO update the JSON string below
json = "{}"
# create an instance of HashOfPlaybackURLs from a JSON string
hash_of_playback_urls_instance = HashOfPlaybackURLs.from_json(json)
# print the JSON string representation of the object
print(HashOfPlaybackURLs.to_json())

# convert the object into a dict
hash_of_playback_urls_dict = hash_of_playback_urls_instance.to_dict()
# create an instance of HashOfPlaybackURLs from a dict
hash_of_playback_urls_from_dict = HashOfPlaybackURLs.from_dict(hash_of_playback_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


