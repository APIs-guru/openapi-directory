# ProductOptionList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**option** | [**List[ProductOption]**](ProductOption.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_option_list200_response_result import ProductOptionList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionList200ResponseResult from a JSON string
product_option_list200_response_result_instance = ProductOptionList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(ProductOptionList200ResponseResult.to_json())

# convert the object into a dict
product_option_list200_response_result_dict = product_option_list200_response_result_instance.to_dict()
# create an instance of ProductOptionList200ResponseResult from a dict
product_option_list200_response_result_from_dict = ProductOptionList200ResponseResult.from_dict(product_option_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


