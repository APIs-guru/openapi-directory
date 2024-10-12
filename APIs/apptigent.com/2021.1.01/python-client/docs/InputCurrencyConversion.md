# InputCurrencyConversion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **float** | Amount to convert | 
**source** | **str** |  | [default to 'USD']
**target** | **str** |  | 

## Example

```python
from openapi_client.models.input_currency_conversion import InputCurrencyConversion

# TODO update the JSON string below
json = "{}"
# create an instance of InputCurrencyConversion from a JSON string
input_currency_conversion_instance = InputCurrencyConversion.from_json(json)
# print the JSON string representation of the object
print(InputCurrencyConversion.to_json())

# convert the object into a dict
input_currency_conversion_dict = input_currency_conversion_instance.to_dict()
# create an instance of InputCurrencyConversion from a dict
input_currency_conversion_from_dict = InputCurrencyConversion.from_dict(input_currency_conversion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


