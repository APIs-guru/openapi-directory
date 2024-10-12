# ProductApiListByProduct200Response

Paged Api list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total number of entities | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductApiListByProduct200ResponseValueInner]**](ProductApiListByProduct200ResponseValueInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_api_list_by_product200_response import ProductApiListByProduct200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductApiListByProduct200Response from a JSON string
product_api_list_by_product200_response_instance = ProductApiListByProduct200Response.from_json(json)
# print the JSON string representation of the object
print(ProductApiListByProduct200Response.to_json())

# convert the object into a dict
product_api_list_by_product200_response_dict = product_api_list_by_product200_response_instance.to_dict()
# create an instance of ProductApiListByProduct200Response from a dict
product_api_list_by_product200_response_from_dict = ProductApiListByProduct200Response.from_dict(product_api_list_by_product200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


