# ChartTracksGetGet200ResponseMessageBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**track_list** | [**List[ChartTracksGetGet200ResponseMessageBodyTrackListInner]**](ChartTracksGetGet200ResponseMessageBodyTrackListInner.md) | A list of tracks | [optional] 

## Example

```python
from openapi_client.models.chart_tracks_get_get200_response_message_body import ChartTracksGetGet200ResponseMessageBody

# TODO update the JSON string below
json = "{}"
# create an instance of ChartTracksGetGet200ResponseMessageBody from a JSON string
chart_tracks_get_get200_response_message_body_instance = ChartTracksGetGet200ResponseMessageBody.from_json(json)
# print the JSON string representation of the object
print(ChartTracksGetGet200ResponseMessageBody.to_json())

# convert the object into a dict
chart_tracks_get_get200_response_message_body_dict = chart_tracks_get_get200_response_message_body_instance.to_dict()
# create an instance of ChartTracksGetGet200ResponseMessageBody from a dict
chart_tracks_get_get200_response_message_body_from_dict = ChartTracksGetGet200ResponseMessageBody.from_dict(chart_tracks_get_get200_response_message_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


