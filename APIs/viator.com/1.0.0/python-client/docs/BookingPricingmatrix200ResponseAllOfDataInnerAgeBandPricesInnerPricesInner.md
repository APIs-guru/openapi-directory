# BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **currency code** for the currency in which pricing is displayed | [optional] 
**merchant_net_price** | **float** | **numeric merchant net rate** for *this* age band - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**merchant_net_price_formatted** | **str** | **currency-formatted merchant net rate** for *this* age band - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**min_no_of_travellers_required_for_price** | **int** | **minimum number of travelers** that this pricing schedule can be applied to; e.g., &#39;3&#39; means that the price is for a group of three people or more | [optional] 
**price** | **float** | **numeric suggested retail price** for *this* age band - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**price_formatted** | **str** | **currency-formatted suggested retail price** for *this* age band and the suggested sell price - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**sort_order** | **str** | **sort order** for *this* pricing object | [optional] 

## Example

```python
from openapi_client.models.booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_prices_inner import BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner from a JSON string
booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_prices_inner_instance = BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner.from_json(json)
# print the JSON string representation of the object
print(BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner.to_json())

# convert the object into a dict
booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_prices_inner_dict = booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_prices_inner_instance.to_dict()
# create an instance of BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner from a dict
booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_prices_inner_from_dict = BookingPricingmatrix200ResponseAllOfDataInnerAgeBandPricesInnerPricesInner.from_dict(booking_pricingmatrix200_response_all_of_data_inner_age_band_prices_inner_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


