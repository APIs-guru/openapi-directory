# InputCurrencyFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **float** | Amount to format | 
**target** | **str** |  | 

## Example

```python
from openapi_client.models.input_currency_format import InputCurrencyFormat

# TODO update the JSON string below
json = "{}"
# create an instance of InputCurrencyFormat from a JSON string
input_currency_format_instance = InputCurrencyFormat.from_json(json)
# print the JSON string representation of the object
print(InputCurrencyFormat.to_json())

# convert the object into a dict
input_currency_format_dict = input_currency_format_instance.to_dict()
# create an instance of InputCurrencyFormat from a dict
input_currency_format_from_dict = InputCurrencyFormat.from_dict(input_currency_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


