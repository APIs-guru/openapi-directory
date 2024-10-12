# ChartTracksGetGet200ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**ChartTracksGetGet200ResponseMessageBody**](ChartTracksGetGet200ResponseMessageBody.md) |  | [optional] 
**header** | [**ChartArtistsGetGet200ResponseMessageHeader**](ChartArtistsGetGet200ResponseMessageHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.chart_tracks_get_get200_response_message import ChartTracksGetGet200ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ChartTracksGetGet200ResponseMessage from a JSON string
chart_tracks_get_get200_response_message_instance = ChartTracksGetGet200ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(ChartTracksGetGet200ResponseMessage.to_json())

# convert the object into a dict
chart_tracks_get_get200_response_message_dict = chart_tracks_get_get200_response_message_instance.to_dict()
# create an instance of ChartTracksGetGet200ResponseMessage from a dict
chart_tracks_get_get200_response_message_from_dict = ChartTracksGetGet200ResponseMessage.from_dict(chart_tracks_get_get200_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


