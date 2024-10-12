# GoogleCloudRetailV2betaProductInputConfig

The input config source for products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_source** | [**GoogleCloudRetailV2betaBigQuerySource**](GoogleCloudRetailV2betaBigQuerySource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudRetailV2betaGcsSource**](GoogleCloudRetailV2betaGcsSource.md) |  | [optional] 
**product_inline_source** | [**GoogleCloudRetailV2betaProductInlineSource**](GoogleCloudRetailV2betaProductInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_product_input_config import GoogleCloudRetailV2betaProductInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaProductInputConfig from a JSON string
google_cloud_retail_v2beta_product_input_config_instance = GoogleCloudRetailV2betaProductInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaProductInputConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_product_input_config_dict = google_cloud_retail_v2beta_product_input_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaProductInputConfig from a dict
google_cloud_retail_v2beta_product_input_config_from_dict = GoogleCloudRetailV2betaProductInputConfig.from_dict(google_cloud_retail_v2beta_product_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


