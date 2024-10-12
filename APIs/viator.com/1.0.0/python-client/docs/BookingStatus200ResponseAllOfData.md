# BookingStatus200ResponseAllOfData

**object** containing booking status and details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_date** | **str** | **date**: of *this* booking | [optional] 
**booking_status** | [**BookingStatusItinerary**](BookingStatusItinerary.md) |  | [optional] 
**distributor_ref** | **str** | **alphanumeric identifer** of the distributor for *this* booking | [optional] 
**item_summaries** | [**List[BookingStatus200ResponseAllOfDataItemSummariesInner]**](BookingStatus200ResponseAllOfDataItemSummariesInner.md) | **array** of item summary objects | [optional] 
**itinerary_id** | **int** | ignore (Viator only) | [optional] 
**sort_order** | **int** | **sort order** for *this* response | [optional] 

## Example

```python
from openapi_client.models.booking_status200_response_all_of_data import BookingStatus200ResponseAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of BookingStatus200ResponseAllOfData from a JSON string
booking_status200_response_all_of_data_instance = BookingStatus200ResponseAllOfData.from_json(json)
# print the JSON string representation of the object
print(BookingStatus200ResponseAllOfData.to_json())

# convert the object into a dict
booking_status200_response_all_of_data_dict = booking_status200_response_all_of_data_instance.to_dict()
# create an instance of BookingStatus200ResponseAllOfData from a dict
booking_status200_response_all_of_data_from_dict = BookingStatus200ResponseAllOfData.from_dict(booking_status200_response_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


