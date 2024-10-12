# CreatePlaybackIDRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**PlaybackPolicy**](PlaybackPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_playback_id_request import CreatePlaybackIDRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePlaybackIDRequest from a JSON string
create_playback_id_request_instance = CreatePlaybackIDRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePlaybackIDRequest.to_json())

# convert the object into a dict
create_playback_id_request_dict = create_playback_id_request_instance.to_dict()
# create an instance of CreatePlaybackIDRequest from a dict
create_playback_id_request_from_dict = CreatePlaybackIDRequest.from_dict(create_playback_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


