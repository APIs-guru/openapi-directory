# InputCalculateNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decimals** | **float** | Round to number of decimal places | 
**input** | **float** | Numeric value to calculate | 

## Example

```python
from openapi_client.models.input_calculate_number import InputCalculateNumber

# TODO update the JSON string below
json = "{}"
# create an instance of InputCalculateNumber from a JSON string
input_calculate_number_instance = InputCalculateNumber.from_json(json)
# print the JSON string representation of the object
print(InputCalculateNumber.to_json())

# convert the object into a dict
input_calculate_number_dict = input_calculate_number_instance.to_dict()
# create an instance of InputCalculateNumber from a dict
input_calculate_number_from_dict = InputCalculateNumber.from_dict(input_calculate_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


