# InputJsonConversionCSV


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **bool** | Include header row | [default to True]
**input** | **str** | JSON array object | 
**omit** | **str** | Columns to omit (comma separated) | [optional] 
**order** | **str** | Column order (comma separated) | [optional] 

## Example

```python
from openapi_client.models.input_json_conversion_csv import InputJsonConversionCSV

# TODO update the JSON string below
json = "{}"
# create an instance of InputJsonConversionCSV from a JSON string
input_json_conversion_csv_instance = InputJsonConversionCSV.from_json(json)
# print the JSON string representation of the object
print(InputJsonConversionCSV.to_json())

# convert the object into a dict
input_json_conversion_csv_dict = input_json_conversion_csv_instance.to_dict()
# create an instance of InputJsonConversionCSV from a dict
input_json_conversion_csv_from_dict = InputJsonConversionCSV.from_dict(input_json_conversion_csv_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


