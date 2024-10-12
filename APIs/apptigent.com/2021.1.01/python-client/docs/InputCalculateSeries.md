# InputCalculateSeries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decimals** | **float** | Round to number of decimal places | 
**input** | **List[float]** | Colllection of values to calculate | 

## Example

```python
from openapi_client.models.input_calculate_series import InputCalculateSeries

# TODO update the JSON string below
json = "{}"
# create an instance of InputCalculateSeries from a JSON string
input_calculate_series_instance = InputCalculateSeries.from_json(json)
# print the JSON string representation of the object
print(InputCalculateSeries.to_json())

# convert the object into a dict
input_calculate_series_dict = input_calculate_series_instance.to_dict()
# create an instance of InputCalculateSeries from a dict
input_calculate_series_from_dict = InputCalculateSeries.from_dict(input_calculate_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


