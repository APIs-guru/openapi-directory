# GetAssetOrLiveStreamIdResponseDataObject

Describes the Asset or LiveStream object associated with the playback ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the object. | [optional] 
**type** | **str** | Identifies the object type associated with the playback ID. | [optional] 

## Example

```python
from openapi_client.models.get_asset_or_live_stream_id_response_data_object import GetAssetOrLiveStreamIdResponseDataObject

# TODO update the JSON string below
json = "{}"
# create an instance of GetAssetOrLiveStreamIdResponseDataObject from a JSON string
get_asset_or_live_stream_id_response_data_object_instance = GetAssetOrLiveStreamIdResponseDataObject.from_json(json)
# print the JSON string representation of the object
print(GetAssetOrLiveStreamIdResponseDataObject.to_json())

# convert the object into a dict
get_asset_or_live_stream_id_response_data_object_dict = get_asset_or_live_stream_id_response_data_object_instance.to_dict()
# create an instance of GetAssetOrLiveStreamIdResponseDataObject from a dict
get_asset_or_live_stream_id_response_data_object_from_dict = GetAssetOrLiveStreamIdResponseDataObject.from_dict(get_asset_or_live_stream_id_response_data_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


