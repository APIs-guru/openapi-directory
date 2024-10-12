# ProductFind200ResponseResultProductInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**price** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.product_find200_response_result_product_inner import ProductFind200ResponseResultProductInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFind200ResponseResultProductInner from a JSON string
product_find200_response_result_product_inner_instance = ProductFind200ResponseResultProductInner.from_json(json)
# print the JSON string representation of the object
print(ProductFind200ResponseResultProductInner.to_json())

# convert the object into a dict
product_find200_response_result_product_inner_dict = product_find200_response_result_product_inner_instance.to_dict()
# create an instance of ProductFind200ResponseResultProductInner from a dict
product_find200_response_result_product_inner_from_dict = ProductFind200ResponseResultProductInner.from_dict(product_find200_response_result_product_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


