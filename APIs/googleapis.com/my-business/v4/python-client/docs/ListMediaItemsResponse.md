# ListMediaItemsResponse

Response message for Media.ListMediaItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_items** | [**List[MediaItem]**](MediaItem.md) | The returned list of media items. | [optional] 
**next_page_token** | **str** | If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListMediaItems. | [optional] 
**total_media_item_count** | **int** | The total number of media items for this location, irrespective of pagination. | [optional] 

## Example

```python
from openapi_client.models.list_media_items_response import ListMediaItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMediaItemsResponse from a JSON string
list_media_items_response_instance = ListMediaItemsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMediaItemsResponse.to_json())

# convert the object into a dict
list_media_items_response_dict = list_media_items_response_instance.to_dict()
# create an instance of ListMediaItemsResponse from a dict
list_media_items_response_from_dict = ListMediaItemsResponse.from_dict(list_media_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


