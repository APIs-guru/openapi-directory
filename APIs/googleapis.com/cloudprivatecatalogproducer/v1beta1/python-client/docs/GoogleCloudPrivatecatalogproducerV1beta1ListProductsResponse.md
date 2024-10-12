# GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token returned from a previous call to ListProducts that indicates where the listing should continue from. This field is optional. | [optional] 
**products** | [**List[GoogleCloudPrivatecatalogproducerV1beta1Product]**](GoogleCloudPrivatecatalogproducerV1beta1Product.md) | The &#x60;Product&#x60; returned from the list call. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_list_products_response import GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse from a JSON string
google_cloud_privatecatalogproducer_v1beta1_list_products_response_instance = GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse.to_json())

# convert the object into a dict
google_cloud_privatecatalogproducer_v1beta1_list_products_response_dict = google_cloud_privatecatalogproducer_v1beta1_list_products_response_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse from a dict
google_cloud_privatecatalogproducer_v1beta1_list_products_response_from_dict = GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse.from_dict(google_cloud_privatecatalogproducer_v1beta1_list_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


