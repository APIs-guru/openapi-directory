# ListProductsResponse

Response message for listing products visible to the buyer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | List pagination support. | [optional] 
**products** | [**List[Product]**](Product.md) | The list of matching products at their head revision number. | [optional] 

## Example

```python
from openapi_client.models.list_products_response import ListProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProductsResponse from a JSON string
list_products_response_instance = ListProductsResponse.from_json(json)
# print the JSON string representation of the object
print(ListProductsResponse.to_json())

# convert the object into a dict
list_products_response_dict = list_products_response_instance.to_dict()
# create an instance of ListProductsResponse from a dict
list_products_response_from_dict = ListProductsResponse.from_dict(list_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


