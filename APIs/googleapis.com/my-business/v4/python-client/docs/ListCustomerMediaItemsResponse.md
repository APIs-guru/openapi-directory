# ListCustomerMediaItemsResponse

Response message for Media.ListCustomerMediaItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_items** | [**List[MediaItem]**](MediaItem.md) | The returned list of media items. | [optional] 
**next_page_token** | **str** | If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListCustomerMediaItems. | [optional] 
**total_media_item_count** | **int** | The total number of media items for this location, irrespective of pagination. This number is approximate, particularly when there are multiple pages of results. | [optional] 

## Example

```python
from openapi_client.models.list_customer_media_items_response import ListCustomerMediaItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomerMediaItemsResponse from a JSON string
list_customer_media_items_response_instance = ListCustomerMediaItemsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomerMediaItemsResponse.to_json())

# convert the object into a dict
list_customer_media_items_response_dict = list_customer_media_items_response_instance.to_dict()
# create an instance of ListCustomerMediaItemsResponse from a dict
list_customer_media_items_response_from_dict = ListCustomerMediaItemsResponse.from_dict(list_customer_media_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


