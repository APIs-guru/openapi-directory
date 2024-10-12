# TracksListResponse

Response listing all tracks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of this response (\&quot;androidpublisher#tracksListResponse\&quot;). | [optional] 
**tracks** | [**List[Track]**](Track.md) | All tracks (including tracks with no releases). | [optional] 

## Example

```python
from openapi_client.models.tracks_list_response import TracksListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TracksListResponse from a JSON string
tracks_list_response_instance = TracksListResponse.from_json(json)
# print the JSON string representation of the object
print(TracksListResponse.to_json())

# convert the object into a dict
tracks_list_response_dict = tracks_list_response_instance.to_dict()
# create an instance of TracksListResponse from a dict
tracks_list_response_from_dict = TracksListResponse.from_dict(tracks_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


