# GoogleCloudRetailV2alphaProductInputConfig

The input config source for products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_source** | [**GoogleCloudRetailV2alphaBigQuerySource**](GoogleCloudRetailV2alphaBigQuerySource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudRetailV2alphaGcsSource**](GoogleCloudRetailV2alphaGcsSource.md) |  | [optional] 
**product_inline_source** | [**GoogleCloudRetailV2alphaProductInlineSource**](GoogleCloudRetailV2alphaProductInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_product_input_config import GoogleCloudRetailV2alphaProductInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaProductInputConfig from a JSON string
google_cloud_retail_v2alpha_product_input_config_instance = GoogleCloudRetailV2alphaProductInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaProductInputConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_product_input_config_dict = google_cloud_retail_v2alpha_product_input_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaProductInputConfig from a dict
google_cloud_retail_v2alpha_product_input_config_from_dict = GoogleCloudRetailV2alphaProductInputConfig.from_dict(google_cloud_retail_v2alpha_product_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


