# BookingHotels200ResponseAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | **natural-language address** of hotel pick-up point | [optional] 
**brand** | **str** | ignore (Viator only) | [optional] 
**city** | **str** | **natural-language name** of the destination that *this* hotel pick-up point pertains to | [optional] 
**destination_id** | **int** | **unique numeric identifer** of the destination that *this* hotel pick-up point pertains to | [optional] 
**hotel_string** | **str** | ignore (Viator only) | [optional] 
**id** | **str** | **identifier** of *this* hotel pick-up point&#x60; | [optional] 
**latitude** | **float** | **numeric latitude component** of *this* hotel pick-up point&#39;s geolocation | [optional] 
**longitude** | **float** | **numeric longitude component** of *this* hotel pick-up point&#39;s geolocation | [optional] 
**name** | **str** | **natural-language name** of hotel pick-up point | [optional] 
**notes** | **str** | **natural-language notes** about *this* hotel pick-up point | [optional] 
**phone** | **str** | **phone number** of *this* hotel pick-up point | [optional] 
**postcode** | **str** | **post code** of *this* hotel pick-up point | [optional] 
**product_codes** | **List[str]** | **array** of product codes pertaining to *this* hotel pick-up point | [optional] 
**sort_order** | **int** | **sort-order** of *this* hotel pick-up point | [optional] 

## Example

```python
from openapi_client.models.booking_hotels200_response_all_of_data_inner import BookingHotels200ResponseAllOfDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingHotels200ResponseAllOfDataInner from a JSON string
booking_hotels200_response_all_of_data_inner_instance = BookingHotels200ResponseAllOfDataInner.from_json(json)
# print the JSON string representation of the object
print(BookingHotels200ResponseAllOfDataInner.to_json())

# convert the object into a dict
booking_hotels200_response_all_of_data_inner_dict = booking_hotels200_response_all_of_data_inner_instance.to_dict()
# create an instance of BookingHotels200ResponseAllOfDataInner from a dict
booking_hotels200_response_all_of_data_inner_from_dict = BookingHotels200ResponseAllOfDataInner.from_dict(booking_hotels200_response_all_of_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


