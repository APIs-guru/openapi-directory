# BookingCalculatepriceRequestItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **str** | **unique alphanumeric identifier** of the product the total price for which you which to calculate | [optional] 
**tour_grade_code** | **str** | **alphanumeric identifier** for the tour grade for which to calculate the total price | [optional] 
**travel_date** | **str** | **date** for which to calculate the total price (must be in the future) | [optional] 
**travellers** | [**List[BookingCalculatepriceRequestItemsInnerTravellersInner]**](BookingCalculatepriceRequestItemsInnerTravellersInner.md) | **array of objects** detailing the age bands for which to calculate the total price | [optional] 

## Example

```python
from openapi_client.models.booking_calculateprice_request_items_inner import BookingCalculatepriceRequestItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingCalculatepriceRequestItemsInner from a JSON string
booking_calculateprice_request_items_inner_instance = BookingCalculatepriceRequestItemsInner.from_json(json)
# print the JSON string representation of the object
print(BookingCalculatepriceRequestItemsInner.to_json())

# convert the object into a dict
booking_calculateprice_request_items_inner_dict = booking_calculateprice_request_items_inner_instance.to_dict()
# create an instance of BookingCalculatepriceRequestItemsInner from a dict
booking_calculateprice_request_items_inner_from_dict = BookingCalculatepriceRequestItemsInner.from_dict(booking_calculateprice_request_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


