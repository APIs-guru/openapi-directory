# MatcherTrackGetGet200ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**ChartTracksGetGet200ResponseMessageBodyTrackListInner**](ChartTracksGetGet200ResponseMessageBodyTrackListInner.md) |  | [optional] 
**header** | [**AlbumGetGet200ResponseMessageHeader**](AlbumGetGet200ResponseMessageHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.matcher_track_get_get200_response_message import MatcherTrackGetGet200ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of MatcherTrackGetGet200ResponseMessage from a JSON string
matcher_track_get_get200_response_message_instance = MatcherTrackGetGet200ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(MatcherTrackGetGet200ResponseMessage.to_json())

# convert the object into a dict
matcher_track_get_get200_response_message_dict = matcher_track_get_get200_response_message_instance.to_dict()
# create an instance of MatcherTrackGetGet200ResponseMessage from a dict
matcher_track_get_get200_response_message_from_dict = MatcherTrackGetGet200ResponseMessage.from_dict(matcher_track_get_get200_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


