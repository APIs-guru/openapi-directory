# GoogleCloudRetailV2betaListProductsResponse

Response message for ProductService.ListProducts method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**products** | [**List[GoogleCloudRetailV2betaProduct]**](GoogleCloudRetailV2betaProduct.md) | The Products. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_list_products_response import GoogleCloudRetailV2betaListProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaListProductsResponse from a JSON string
google_cloud_retail_v2beta_list_products_response_instance = GoogleCloudRetailV2betaListProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaListProductsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_list_products_response_dict = google_cloud_retail_v2beta_list_products_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaListProductsResponse from a dict
google_cloud_retail_v2beta_list_products_response_from_dict = GoogleCloudRetailV2betaListProductsResponse.from_dict(google_cloud_retail_v2beta_list_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


