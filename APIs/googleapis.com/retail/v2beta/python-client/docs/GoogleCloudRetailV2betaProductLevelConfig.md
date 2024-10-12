# GoogleCloudRetailV2betaProductLevelConfig

Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingestion_product_type** | **str** | The type of Products allowed to be ingested into the catalog. Acceptable values are: * &#x60;primary&#x60; (default): You can ingest Products of all types. When ingesting a Product, its type will default to Product.Type.PRIMARY if unset. * &#x60;variant&#x60; (incompatible with Retail Search): You can only ingest Product.Type.VARIANT Products. This means Product.primary_product_id cannot be empty. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is &#x60;variant&#x60; and merchant_center_product_id_field is &#x60;itemGroupId&#x60;, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details. | [optional] 
**merchant_center_product_id_field** | **str** | Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are: * &#x60;offerId&#x60; (default): Import &#x60;offerId&#x60; as the product ID. * &#x60;itemGroupId&#x60;: Import &#x60;itemGroupId&#x60; as the product ID. Notice that Retail API will choose one item from the ones with the same &#x60;itemGroupId&#x60;, and use it to represent the item group. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is &#x60;itemGroupId&#x60; and ingestion_product_type is &#x60;variant&#x60;, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_product_level_config import GoogleCloudRetailV2betaProductLevelConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaProductLevelConfig from a JSON string
google_cloud_retail_v2beta_product_level_config_instance = GoogleCloudRetailV2betaProductLevelConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaProductLevelConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_product_level_config_dict = google_cloud_retail_v2beta_product_level_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaProductLevelConfig from a dict
google_cloud_retail_v2beta_product_level_config_from_dict = GoogleCloudRetailV2betaProductLevelConfig.from_dict(google_cloud_retail_v2beta_product_level_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


