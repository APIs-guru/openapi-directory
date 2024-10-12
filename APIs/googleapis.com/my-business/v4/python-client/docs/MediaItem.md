# MediaItem

A single media item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution** | [**Attribution**](Attribution.md) |  | [optional] 
**create_time** | **str** | Output only. Creation time of this media item. | [optional] 
**data_ref** | [**MediaItemDataRef**](MediaItemDataRef.md) |  | [optional] 
**description** | **str** | Description for this media item. Descriptions cannot be modified through the Google My Business API, but can be set when creating a new media item that is not a cover photo. | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**google_url** | **str** | Output only. Google-hosted URL for this media item. This URL is not static since it may change over time. For video this will be a preview image with an overlaid play icon. | [optional] 
**insights** | [**MediaInsights**](MediaInsights.md) |  | [optional] 
**location_association** | [**LocationAssociation**](LocationAssociation.md) |  | [optional] 
**media_format** | **str** | The format of this media item. Must be set when the media item is created, and is read-only on all other requests. Cannot be updated. | [optional] 
**name** | **str** | The resource name for this media item. &#x60;accounts/{account_id}/locations/{location_id}/media/{media_key}&#x60; | [optional] 
**source_url** | **str** | A publicly accessible URL where the media item can be retrieved from. When creating one of this or data_ref must be set to specify the source of the media item. If &#x60;source_url&#x60; was used when creating a media item, it will be populated with that source URL when the media item is retrieved. This field cannot be updated. | [optional] 
**thumbnail_url** | **str** | Output only. Where provided, the URL of a thumbnail image for this media item. | [optional] 

## Example

```python
from openapi_client.models.media_item import MediaItem

# TODO update the JSON string below
json = "{}"
# create an instance of MediaItem from a JSON string
media_item_instance = MediaItem.from_json(json)
# print the JSON string representation of the object
print(MediaItem.to_json())

# convert the object into a dict
media_item_dict = media_item_instance.to_dict()
# create an instance of MediaItem from a dict
media_item_from_dict = MediaItem.from_dict(media_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


