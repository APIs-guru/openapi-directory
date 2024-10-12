# ActivityContentDetails

Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bulletin** | [**ActivityContentDetailsBulletin**](ActivityContentDetailsBulletin.md) |  | [optional] 
**channel_item** | [**ActivityContentDetailsChannelItem**](ActivityContentDetailsChannelItem.md) |  | [optional] 
**comment** | [**ActivityContentDetailsComment**](ActivityContentDetailsComment.md) |  | [optional] 
**favorite** | [**ActivityContentDetailsFavorite**](ActivityContentDetailsFavorite.md) |  | [optional] 
**like** | [**ActivityContentDetailsLike**](ActivityContentDetailsLike.md) |  | [optional] 
**playlist_item** | [**ActivityContentDetailsPlaylistItem**](ActivityContentDetailsPlaylistItem.md) |  | [optional] 
**promoted_item** | [**ActivityContentDetailsPromotedItem**](ActivityContentDetailsPromotedItem.md) |  | [optional] 
**recommendation** | [**ActivityContentDetailsRecommendation**](ActivityContentDetailsRecommendation.md) |  | [optional] 
**social** | [**ActivityContentDetailsSocial**](ActivityContentDetailsSocial.md) |  | [optional] 
**subscription** | [**ActivityContentDetailsSubscription**](ActivityContentDetailsSubscription.md) |  | [optional] 
**upload** | [**ActivityContentDetailsUpload**](ActivityContentDetailsUpload.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details import ActivityContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetails from a JSON string
activity_content_details_instance = ActivityContentDetails.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetails.to_json())

# convert the object into a dict
activity_content_details_dict = activity_content_details_instance.to_dict()
# create an instance of ActivityContentDetails from a dict
activity_content_details_from_dict = ActivityContentDetails.from_dict(activity_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


