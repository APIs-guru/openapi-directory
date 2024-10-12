# GoogleCloudPrivatecatalogV1beta1SearchProductsResponse

Response message for PrivateCatalog.SearchProducts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token returned from a previous call to SearchProducts that indicates from where listing should continue. This field is optional. | [optional] 
**products** | [**List[GoogleCloudPrivatecatalogV1beta1Product]**](GoogleCloudPrivatecatalogV1beta1Product.md) | The &#x60;Product&#x60; resources computed from the resource context. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalog_v1beta1_search_products_response import GoogleCloudPrivatecatalogV1beta1SearchProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogV1beta1SearchProductsResponse from a JSON string
google_cloud_privatecatalog_v1beta1_search_products_response_instance = GoogleCloudPrivatecatalogV1beta1SearchProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogV1beta1SearchProductsResponse.to_json())

# convert the object into a dict
google_cloud_privatecatalog_v1beta1_search_products_response_dict = google_cloud_privatecatalog_v1beta1_search_products_response_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogV1beta1SearchProductsResponse from a dict
google_cloud_privatecatalog_v1beta1_search_products_response_from_dict = GoogleCloudPrivatecatalogV1beta1SearchProductsResponse.from_dict(google_cloud_privatecatalog_v1beta1_search_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


