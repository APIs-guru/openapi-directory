# GoogleCloudRetailV2betaPriceInfoPriceRange

The price range of all variant Product having the same Product.primary_product_id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_price** | [**GoogleCloudRetailV2betaInterval**](GoogleCloudRetailV2betaInterval.md) |  | [optional] 
**price** | [**GoogleCloudRetailV2betaInterval**](GoogleCloudRetailV2betaInterval.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_price_info_price_range import GoogleCloudRetailV2betaPriceInfoPriceRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaPriceInfoPriceRange from a JSON string
google_cloud_retail_v2beta_price_info_price_range_instance = GoogleCloudRetailV2betaPriceInfoPriceRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaPriceInfoPriceRange.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_price_info_price_range_dict = google_cloud_retail_v2beta_price_info_price_range_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaPriceInfoPriceRange from a dict
google_cloud_retail_v2beta_price_info_price_range_from_dict = GoogleCloudRetailV2betaPriceInfoPriceRange.from_dict(google_cloud_retail_v2beta_price_info_price_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


