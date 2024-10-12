# BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_id** | **int** | **unique numeric identifier** for the age band - See: [Working with age bands](#section/Appendices/Working-with-age-bands)  | [optional] 
**maximum_count_required** | **int** | **maximum number of travelers** that this pricing schedule can be applied to - use this field to specify the largest group size you are interested in making a booking for  | [optional] 
**minimum_count_required** | **int** | **minimum number of travelers** that this pricing schedule can be applied to - use this field to specify the smallest group size you are interested in making a booking for  | [optional] 
**prices** | [**List[BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner]**](BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner.md) | **array** of prices available for *this* age band (based on the min and max count required) | [optional] 
**sort_order** | **int** | **sort order** for *this* age band | [optional] 

## Example

```python
from openapi_client.models.booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner import BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner from a JSON string
booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_instance = BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner.from_json(json)
# print the JSON string representation of the object
print(BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner.to_json())

# convert the object into a dict
booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_dict = booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_instance.to_dict()
# create an instance of BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner from a dict
booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_from_dict = BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInner.from_dict(booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


