# ProductGroupListByProduct200Response

Paged Group list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductGroupListByProduct200ResponseValueInner]**](ProductGroupListByProduct200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.product_group_list_by_product200_response import ProductGroupListByProduct200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupListByProduct200Response from a JSON string
product_group_list_by_product200_response_instance = ProductGroupListByProduct200Response.from_json(json)
# print the JSON string representation of the object
print(ProductGroupListByProduct200Response.to_json())

# convert the object into a dict
product_group_list_by_product200_response_dict = product_group_list_by_product200_response_instance.to_dict()
# create an instance of ProductGroupListByProduct200Response from a dict
product_group_list_by_product200_response_from_dict = ProductGroupListByProduct200Response.from_dict(product_group_list_by_product200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


