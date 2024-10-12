# BookingCalculateprice200ResponseAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **specifier of the currency** in which pricing details are displayed | [optional] 
**has_promo_code** | **bool** | ignore (Viator only) | [optional] 
**itinerary** | [**BookingCalculateprice200ResponseAllOfDataItinerary**](BookingCalculateprice200ResponseAllOfDataItinerary.md) |  | [optional] 
**itinerary_from_price** | **float** | ignore (Viator only) | [optional] 
**itinerary_from_price_formatted** | **str** | ignore (Viator only) | [optional] 
**itinerary_new_price** | **float** | ignore (Viator only) | [optional] 
**itinerary_new_price_formatted** | **str** | ignore (Viator only) | [optional] 
**itinerary_saving** | **int** | ignore (Viator only) | [optional] 
**itinerary_saving_formatted** | **str** | ignore (Viator only) | [optional] 
**payment_gateway_info** | **str** | ignore (Viator only) | [optional] 
**promo_code** | **str** | ignore (Viator only) | [optional] 
**promo_code_expired** | **bool** | ignore (Viator only) | [optional] 
**promo_code_valid** | **bool** | ignore (Viator only) | [optional] 
**rules_applied** | **List[str]** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.booking_calculateprice200_response_all_of_data import BookingCalculateprice200ResponseAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of BookingCalculateprice200ResponseAllOfData from a JSON string
booking_calculateprice200_response_all_of_data_instance = BookingCalculateprice200ResponseAllOfData.from_json(json)
# print the JSON string representation of the object
print(BookingCalculateprice200ResponseAllOfData.to_json())

# convert the object into a dict
booking_calculateprice200_response_all_of_data_dict = booking_calculateprice200_response_all_of_data_instance.to_dict()
# create an instance of BookingCalculateprice200ResponseAllOfData from a dict
booking_calculateprice200_response_all_of_data_from_dict = BookingCalculateprice200ResponseAllOfData.from_dict(booking_calculateprice200_response_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


