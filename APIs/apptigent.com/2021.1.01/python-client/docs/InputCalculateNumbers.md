# InputCalculateNumbers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decimals** | **float** | Round to number of decimal places | 
**input** | **float** | Numeric value | 
**value** | **float** | Addend, subtrahend, factor, divisor or radicand | 

## Example

```python
from openapi_client.models.input_calculate_numbers import InputCalculateNumbers

# TODO update the JSON string below
json = "{}"
# create an instance of InputCalculateNumbers from a JSON string
input_calculate_numbers_instance = InputCalculateNumbers.from_json(json)
# print the JSON string representation of the object
print(InputCalculateNumbers.to_json())

# convert the object into a dict
input_calculate_numbers_dict = input_calculate_numbers_instance.to_dict()
# create an instance of InputCalculateNumbers from a dict
input_calculate_numbers_from_dict = InputCalculateNumbers.from_dict(input_calculate_numbers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


