# CreatePlaybackIDResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PlaybackID**](PlaybackID.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_playback_id_response import CreatePlaybackIDResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePlaybackIDResponse from a JSON string
create_playback_id_response_instance = CreatePlaybackIDResponse.from_json(json)
# print the JSON string representation of the object
print(CreatePlaybackIDResponse.to_json())

# convert the object into a dict
create_playback_id_response_dict = create_playback_id_response_instance.to_dict()
# create an instance of CreatePlaybackIDResponse from a dict
create_playback_id_response_from_dict = CreatePlaybackIDResponse.from_dict(create_playback_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


