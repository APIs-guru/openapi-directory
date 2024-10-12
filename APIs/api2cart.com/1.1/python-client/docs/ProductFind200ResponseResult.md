# ProductFind200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**List[ProductFind200ResponseResultProductInner]**](ProductFind200ResponseResultProductInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_find200_response_result import ProductFind200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFind200ResponseResult from a JSON string
product_find200_response_result_instance = ProductFind200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(ProductFind200ResponseResult.to_json())

# convert the object into a dict
product_find200_response_result_dict = product_find200_response_result_instance.to_dict()
# create an instance of ProductFind200ResponseResult from a dict
product_find200_response_result_from_dict = ProductFind200ResponseResult.from_dict(product_find200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


