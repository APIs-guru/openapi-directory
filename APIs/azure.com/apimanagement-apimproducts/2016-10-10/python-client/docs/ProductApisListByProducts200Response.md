# ProductApisListByProducts200Response

Paged Api list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductApisListByProducts200ResponseValueInner]**](ProductApisListByProducts200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.product_apis_list_by_products200_response import ProductApisListByProducts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductApisListByProducts200Response from a JSON string
product_apis_list_by_products200_response_instance = ProductApisListByProducts200Response.from_json(json)
# print the JSON string representation of the object
print(ProductApisListByProducts200Response.to_json())

# convert the object into a dict
product_apis_list_by_products200_response_dict = product_apis_list_by_products200_response_instance.to_dict()
# create an instance of ProductApisListByProducts200Response from a dict
product_apis_list_by_products200_response_from_dict = ProductApisListByProducts200Response.from_dict(product_apis_list_by_products200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


