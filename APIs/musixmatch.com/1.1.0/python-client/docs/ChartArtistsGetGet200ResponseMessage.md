# ChartArtistsGetGet200ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**ArtistRelatedGetGet200ResponseMessageBody**](ArtistRelatedGetGet200ResponseMessageBody.md) |  | [optional] 
**header** | [**ChartArtistsGetGet200ResponseMessageHeader**](ChartArtistsGetGet200ResponseMessageHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.chart_artists_get_get200_response_message import ChartArtistsGetGet200ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ChartArtistsGetGet200ResponseMessage from a JSON string
chart_artists_get_get200_response_message_instance = ChartArtistsGetGet200ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(ChartArtistsGetGet200ResponseMessage.to_json())

# convert the object into a dict
chart_artists_get_get200_response_message_dict = chart_artists_get_get200_response_message_instance.to_dict()
# create an instance of ChartArtistsGetGet200ResponseMessage from a dict
chart_artists_get_get200_response_message_from_dict = ChartArtistsGetGet200ResponseMessage.from_dict(chart_artists_get_get200_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


