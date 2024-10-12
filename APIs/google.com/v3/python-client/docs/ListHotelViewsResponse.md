# ListHotelViewsResponse

Response message for HotelViewService.ListHotelViews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hotel_views** | [**List[HotelView]**](HotelView.md) | The list of rows that match the query. | [optional] 
**next_page_token** | **str** | Pagination token used to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_hotel_views_response import ListHotelViewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHotelViewsResponse from a JSON string
list_hotel_views_response_instance = ListHotelViewsResponse.from_json(json)
# print the JSON string representation of the object
print(ListHotelViewsResponse.to_json())

# convert the object into a dict
list_hotel_views_response_dict = list_hotel_views_response_instance.to_dict()
# create an instance of ListHotelViewsResponse from a dict
list_hotel_views_response_from_dict = ListHotelViewsResponse.from_dict(list_hotel_views_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


