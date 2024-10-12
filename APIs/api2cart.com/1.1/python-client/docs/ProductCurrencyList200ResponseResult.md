# ProductCurrencyList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**List[Currency]**](Currency.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_currency_list200_response_result import ProductCurrencyList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCurrencyList200ResponseResult from a JSON string
product_currency_list200_response_result_instance = ProductCurrencyList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(ProductCurrencyList200ResponseResult.to_json())

# convert the object into a dict
product_currency_list200_response_result_dict = product_currency_list200_response_result_instance.to_dict()
# create an instance of ProductCurrencyList200ResponseResult from a dict
product_currency_list200_response_result_from_dict = ProductCurrencyList200ResponseResult.from_dict(product_currency_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


