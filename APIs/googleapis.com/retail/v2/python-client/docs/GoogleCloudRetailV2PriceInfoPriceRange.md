# GoogleCloudRetailV2PriceInfoPriceRange

The price range of all variant Product having the same Product.primary_product_id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_price** | [**GoogleCloudRetailV2Interval**](GoogleCloudRetailV2Interval.md) |  | [optional] 
**price** | [**GoogleCloudRetailV2Interval**](GoogleCloudRetailV2Interval.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_price_info_price_range import GoogleCloudRetailV2PriceInfoPriceRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2PriceInfoPriceRange from a JSON string
google_cloud_retail_v2_price_info_price_range_instance = GoogleCloudRetailV2PriceInfoPriceRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2PriceInfoPriceRange.to_json())

# convert the object into a dict
google_cloud_retail_v2_price_info_price_range_dict = google_cloud_retail_v2_price_info_price_range_instance.to_dict()
# create an instance of GoogleCloudRetailV2PriceInfoPriceRange from a dict
google_cloud_retail_v2_price_info_price_range_from_dict = GoogleCloudRetailV2PriceInfoPriceRange.from_dict(google_cloud_retail_v2_price_info_price_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


