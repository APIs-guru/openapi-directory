# ProductsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**product** | [**List[Product]**](Product.md) | Information about a product (e.g. an app) in the Google Play store, for display to an enterprise admin. | [optional] 
**token_pagination** | [**TokenPagination**](TokenPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.products_list_response import ProductsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsListResponse from a JSON string
products_list_response_instance = ProductsListResponse.from_json(json)
# print the JSON string representation of the object
print(ProductsListResponse.to_json())

# convert the object into a dict
products_list_response_dict = products_list_response_instance.to_dict()
# create an instance of ProductsListResponse from a dict
products_list_response_from_dict = ProductsListResponse.from_dict(products_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


