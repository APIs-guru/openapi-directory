# BookingAvailability200ResponseAllOfDataAvailabilityInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | **indicator** - &#x60;true&#x60; if *this* tour grade is available to book | [optional] 
**booking_date** | **str** | **date** on which *this* tour grade is available to be booked | [optional] 
**currency_code** | **str** | **currency code** of the currency in which product pricing is displayed | [optional] 
**grade_code** | **str** | **alphanumeric identifier** for *this* tour grade | [optional] 
**merchant_net_price** | **float** | **numeric merchant net rate** for *this* tour grade - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**merchant_net_price_formatted** | **str** | **currency-formatted merchant net rate** for *this* tour grade - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**retail_price** | **float** | **numeric suggested retail price** for *this* tour grade - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**retail_price_formatted** | **str** | **currency-formatted suggested retail price** for *this* tour grade - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**sort_order** | **int** | **sort order** of this tour grade availability object | [optional] 
**unavailable_reason** | **str** | **natural-language explanation** as to why *this* tour grade is not available to be booked | [optional] 

## Example

```python
from openapi_client.models.booking_availability200_response_all_of_data_availability_inner import BookingAvailability200ResponseAllOfDataAvailabilityInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailability200ResponseAllOfDataAvailabilityInner from a JSON string
booking_availability200_response_all_of_data_availability_inner_instance = BookingAvailability200ResponseAllOfDataAvailabilityInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailability200ResponseAllOfDataAvailabilityInner.to_json())

# convert the object into a dict
booking_availability200_response_all_of_data_availability_inner_dict = booking_availability200_response_all_of_data_availability_inner_instance.to_dict()
# create an instance of BookingAvailability200ResponseAllOfDataAvailabilityInner from a dict
booking_availability200_response_all_of_data_availability_inner_from_dict = BookingAvailability200ResponseAllOfDataAvailabilityInner.from_dict(booking_availability200_response_all_of_data_availability_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


