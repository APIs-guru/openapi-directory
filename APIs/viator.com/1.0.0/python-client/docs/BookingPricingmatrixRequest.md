# BookingPricingmatrixRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_date** | **str** | **date** for which to retrieve pricing data  (must be in the future) (**note**: this is an optional parameter for normal products; if the date is *not* provided then the nearest available date is determined) | [optional] 
**currency_code** | **str** | **currency code** of the currency in which to display pricing information | [optional] 
**product_code** | **str** | **unique alphanumeric identifier** of the product for which to retrieve the pricing matrix | [optional] 
**tour_grade_code** | **str** | **alphanumeric identifier** of the product tour grade for which to retrieve the pricing matrix | [optional] 

## Example

```python
from openapi_client.models.booking_pricingmatrix_request import BookingPricingmatrixRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BookingPricingmatrixRequest from a JSON string
booking_pricingmatrix_request_instance = BookingPricingmatrixRequest.from_json(json)
# print the JSON string representation of the object
print(BookingPricingmatrixRequest.to_json())

# convert the object into a dict
booking_pricingmatrix_request_dict = booking_pricingmatrix_request_instance.to_dict()
# create an instance of BookingPricingmatrixRequest from a dict
booking_pricingmatrix_request_from_dict = BookingPricingmatrixRequest.from_dict(booking_pricingmatrix_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


