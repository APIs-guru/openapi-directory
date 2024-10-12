# GoogleCloudRetailV2alphaListProductsResponse

Response message for ProductService.ListProducts method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**products** | [**List[GoogleCloudRetailV2alphaProduct]**](GoogleCloudRetailV2alphaProduct.md) | The Products. | [optional] 
**total_size** | **int** | The total count of matched Products irrespective of pagination. The total number of Products returned by pagination may be less than the total_size that matches. This field is ignored if ListProductsRequest.require_total_size is not set or ListProductsRequest.page_token is not empty. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_list_products_response import GoogleCloudRetailV2alphaListProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaListProductsResponse from a JSON string
google_cloud_retail_v2alpha_list_products_response_instance = GoogleCloudRetailV2alphaListProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaListProductsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_list_products_response_dict = google_cloud_retail_v2alpha_list_products_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaListProductsResponse from a dict
google_cloud_retail_v2alpha_list_products_response_from_dict = GoogleCloudRetailV2alphaListProductsResponse.from_dict(google_cloud_retail_v2alpha_list_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


