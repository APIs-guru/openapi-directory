# ListProductsInProductSetResponse

Response message for the `ListProductsInProductSet` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**products** | [**List[Product]**](Product.md) | The list of Products. | [optional] 

## Example

```python
from openapi_client.models.list_products_in_product_set_response import ListProductsInProductSetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProductsInProductSetResponse from a JSON string
list_products_in_product_set_response_instance = ListProductsInProductSetResponse.from_json(json)
# print the JSON string representation of the object
print(ListProductsInProductSetResponse.to_json())

# convert the object into a dict
list_products_in_product_set_response_dict = list_products_in_product_set_response_instance.to_dict()
# create an instance of ListProductsInProductSetResponse from a dict
list_products_in_product_set_response_from_dict = ListProductsInProductSetResponse.from_dict(list_products_in_product_set_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


