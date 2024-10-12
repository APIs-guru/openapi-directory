# GoogleCloudRetailV2ProductInputConfig

The input config source for products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_source** | [**GoogleCloudRetailV2BigQuerySource**](GoogleCloudRetailV2BigQuerySource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudRetailV2GcsSource**](GoogleCloudRetailV2GcsSource.md) |  | [optional] 
**product_inline_source** | [**GoogleCloudRetailV2ProductInlineSource**](GoogleCloudRetailV2ProductInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_product_input_config import GoogleCloudRetailV2ProductInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ProductInputConfig from a JSON string
google_cloud_retail_v2_product_input_config_instance = GoogleCloudRetailV2ProductInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ProductInputConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2_product_input_config_dict = google_cloud_retail_v2_product_input_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2ProductInputConfig from a dict
google_cloud_retail_v2_product_input_config_from_dict = GoogleCloudRetailV2ProductInputConfig.from_dict(google_cloud_retail_v2_product_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


