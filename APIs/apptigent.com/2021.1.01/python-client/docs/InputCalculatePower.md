# InputCalculatePower


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decimals** | **float** | Round to number of decimal places | 
**input** | **float** | Number to raise | 
**power** | **float** | Power | 

## Example

```python
from openapi_client.models.input_calculate_power import InputCalculatePower

# TODO update the JSON string below
json = "{}"
# create an instance of InputCalculatePower from a JSON string
input_calculate_power_instance = InputCalculatePower.from_json(json)
# print the JSON string representation of the object
print(InputCalculatePower.to_json())

# convert the object into a dict
input_calculate_power_dict = input_calculate_power_instance.to_dict()
# create an instance of InputCalculatePower from a dict
input_calculate_power_from_dict = InputCalculatePower.from_dict(input_calculate_power_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


