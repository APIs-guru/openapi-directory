# GoogleCloudRetailV2betaPriceInfo

The price information of a Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **float** | The costs associated with the sale of a particular product. Used for gross profit reporting. * Profit &#x3D; price - cost Google Merchant Center property [cost_of_goods_sold](https://support.google.com/merchants/answer/9017895). | [optional] 
**currency_code** | **str** | The 3-letter currency code defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). If this field is an unrecognizable currency code, an INVALID_ARGUMENT error is returned. The Product.Type.VARIANT Products with the same Product.primary_product_id must share the same currency_code. Otherwise, a FAILED_PRECONDITION error is returned. | [optional] 
**original_price** | **float** | Price of the product without any discount. If zero, by default set to be the price. If set, original_price should be greater than or equal to price, otherwise an INVALID_ARGUMENT error is thrown. | [optional] 
**price** | **float** | Price of the product. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371). Schema.org property [Offer.price](https://schema.org/price). | [optional] 
**price_effective_time** | **str** | The timestamp when the price starts to be effective. This can be set as a future timestamp, and the price is only used for search after price_effective_time. If so, the original_price must be set and original_price is used before price_effective_time. Do not set if price is always effective because it will cause additional latency during search. | [optional] 
**price_expire_time** | **str** | The timestamp when the price stops to be effective. The price is used for search before price_expire_time. If this field is set, the original_price must be set and original_price is used after price_expire_time. Do not set if price is always effective because it will cause additional latency during search. | [optional] 
**price_range** | [**GoogleCloudRetailV2betaPriceInfoPriceRange**](GoogleCloudRetailV2betaPriceInfoPriceRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_price_info import GoogleCloudRetailV2betaPriceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaPriceInfo from a JSON string
google_cloud_retail_v2beta_price_info_instance = GoogleCloudRetailV2betaPriceInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaPriceInfo.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_price_info_dict = google_cloud_retail_v2beta_price_info_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaPriceInfo from a dict
google_cloud_retail_v2beta_price_info_from_dict = GoogleCloudRetailV2betaPriceInfo.from_dict(google_cloud_retail_v2beta_price_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


