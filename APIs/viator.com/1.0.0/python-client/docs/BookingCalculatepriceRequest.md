# BookingCalculatepriceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **currency code** for the currency in which to display pricing details | [optional] 
**items** | [**List[BookingCalculatepriceRequestItemsInner]**](BookingCalculatepriceRequestItemsInner.md) | **array** of travel detail objects | [optional] 

## Example

```python
from openapi_client.models.booking_calculateprice_request import BookingCalculatepriceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BookingCalculatepriceRequest from a JSON string
booking_calculateprice_request_instance = BookingCalculatepriceRequest.from_json(json)
# print the JSON string representation of the object
print(BookingCalculatepriceRequest.to_json())

# convert the object into a dict
booking_calculateprice_request_dict = booking_calculateprice_request_instance.to_dict()
# create an instance of BookingCalculatepriceRequest from a dict
booking_calculateprice_request_from_dict = BookingCalculatepriceRequest.from_dict(booking_calculateprice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


