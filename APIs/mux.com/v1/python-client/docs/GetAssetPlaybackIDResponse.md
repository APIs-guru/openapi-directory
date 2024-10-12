# GetAssetPlaybackIDResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PlaybackID**](PlaybackID.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_asset_playback_id_response import GetAssetPlaybackIDResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAssetPlaybackIDResponse from a JSON string
get_asset_playback_id_response_instance = GetAssetPlaybackIDResponse.from_json(json)
# print the JSON string representation of the object
print(GetAssetPlaybackIDResponse.to_json())

# convert the object into a dict
get_asset_playback_id_response_dict = get_asset_playback_id_response_instance.to_dict()
# create an instance of GetAssetPlaybackIDResponse from a dict
get_asset_playback_id_response_from_dict = GetAssetPlaybackIDResponse.from_dict(get_asset_playback_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


