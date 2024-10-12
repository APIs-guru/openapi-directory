# GoogleCloudRetailV2ListProductsResponse

Response message for ProductService.ListProducts method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**products** | [**List[GoogleCloudRetailV2Product]**](GoogleCloudRetailV2Product.md) | The Products. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_list_products_response import GoogleCloudRetailV2ListProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ListProductsResponse from a JSON string
google_cloud_retail_v2_list_products_response_instance = GoogleCloudRetailV2ListProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ListProductsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2_list_products_response_dict = google_cloud_retail_v2_list_products_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2ListProductsResponse from a dict
google_cloud_retail_v2_list_products_response_from_dict = GoogleCloudRetailV2ListProductsResponse.from_dict(google_cloud_retail_v2_list_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


