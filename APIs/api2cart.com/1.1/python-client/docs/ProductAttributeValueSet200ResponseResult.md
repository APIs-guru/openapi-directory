# ProductAttributeValueSet200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**value_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_attribute_value_set200_response_result import ProductAttributeValueSet200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAttributeValueSet200ResponseResult from a JSON string
product_attribute_value_set200_response_result_instance = ProductAttributeValueSet200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(ProductAttributeValueSet200ResponseResult.to_json())

# convert the object into a dict
product_attribute_value_set200_response_result_dict = product_attribute_value_set200_response_result_instance.to_dict()
# create an instance of ProductAttributeValueSet200ResponseResult from a dict
product_attribute_value_set200_response_result_from_dict = ProductAttributeValueSet200ResponseResult.from_dict(product_attribute_value_set200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


