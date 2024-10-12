# GetAssetOrLiveStreamIdResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Playback ID used to retrieve the corresponding asset or the live stream ID | [optional] 
**object** | [**GetAssetOrLiveStreamIdResponseDataObject**](GetAssetOrLiveStreamIdResponseDataObject.md) |  | [optional] 
**policy** | [**PlaybackPolicy**](PlaybackPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_asset_or_live_stream_id_response_data import GetAssetOrLiveStreamIdResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetAssetOrLiveStreamIdResponseData from a JSON string
get_asset_or_live_stream_id_response_data_instance = GetAssetOrLiveStreamIdResponseData.from_json(json)
# print the JSON string representation of the object
print(GetAssetOrLiveStreamIdResponseData.to_json())

# convert the object into a dict
get_asset_or_live_stream_id_response_data_dict = get_asset_or_live_stream_id_response_data_instance.to_dict()
# create an instance of GetAssetOrLiveStreamIdResponseData from a dict
get_asset_or_live_stream_id_response_data_from_dict = GetAssetOrLiveStreamIdResponseData.from_dict(get_asset_or_live_stream_id_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


