# GoogleCloudRetailV2ProductInlineSource

The inline source for the input config for ImportProducts method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**List[GoogleCloudRetailV2Product]**](GoogleCloudRetailV2Product.md) | Required. A list of products to update/create. Each product must have a valid Product.id. Recommended max of 100 items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_product_inline_source import GoogleCloudRetailV2ProductInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ProductInlineSource from a JSON string
google_cloud_retail_v2_product_inline_source_instance = GoogleCloudRetailV2ProductInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ProductInlineSource.to_json())

# convert the object into a dict
google_cloud_retail_v2_product_inline_source_dict = google_cloud_retail_v2_product_inline_source_instance.to_dict()
# create an instance of GoogleCloudRetailV2ProductInlineSource from a dict
google_cloud_retail_v2_product_inline_source_from_dict = GoogleCloudRetailV2ProductInlineSource.from_dict(google_cloud_retail_v2_product_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


