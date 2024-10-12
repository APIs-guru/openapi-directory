# BookingPricingmatrix200ResponseAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_band_prices** | [**List[BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner]**](BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner.md) | **array** of age band pricing objects | [optional] 
**booking_date** | **str** | **date** for which to retrieve pricing information | [optional] 
**pricing_unit** | **str** | **unit** in which pricing is calculated (currently, only &#39;per person&#39; is supported) - see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information  | [optional] 
**sort_order** | **int** | **sort order** for *this* response object | [optional] 

## Example

```python
from openapi_client.models.booking_pricingmatrix200_response_all_of_data_inner import BookingPricingmatrix200ResponseAllOfDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingPricingmatrix200ResponseAllOfDataInner from a JSON string
booking_pricingmatrix200_response_all_of_data_inner_instance = BookingPricingmatrix200ResponseAllOfDataInner.from_json(json)
# print the JSON string representation of the object
print(BookingPricingmatrix200ResponseAllOfDataInner.to_json())

# convert the object into a dict
booking_pricingmatrix200_response_all_of_data_inner_dict = booking_pricingmatrix200_response_all_of_data_inner_instance.to_dict()
# create an instance of BookingPricingmatrix200ResponseAllOfDataInner from a dict
booking_pricingmatrix200_response_all_of_data_inner_from_dict = BookingPricingmatrix200ResponseAllOfDataInner.from_dict(booking_pricingmatrix200_response_all_of_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


