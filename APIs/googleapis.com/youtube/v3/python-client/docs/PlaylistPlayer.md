# PlaylistPlayer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embed_html** | **str** | An &lt;iframe&gt; tag that embeds a player that will play the playlist. | [optional] 

## Example

```python
from openapi_client.models.playlist_player import PlaylistPlayer

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistPlayer from a JSON string
playlist_player_instance = PlaylistPlayer.from_json(json)
# print the JSON string representation of the object
print(PlaylistPlayer.to_json())

# convert the object into a dict
playlist_player_dict = playlist_player_instance.to_dict()
# create an instance of PlaylistPlayer from a dict
playlist_player_from_dict = PlaylistPlayer.from_dict(playlist_player_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


