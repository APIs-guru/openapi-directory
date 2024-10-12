# AppendValuesResponse

The response when updating a range of values in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spreadsheet_id** | **str** | The spreadsheet the updates were applied to. | [optional] 
**table_range** | **str** | The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found. | [optional] 
**updates** | [**UpdateValuesResponse**](UpdateValuesResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.append_values_response import AppendValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppendValuesResponse from a JSON string
append_values_response_instance = AppendValuesResponse.from_json(json)
# print the JSON string representation of the object
print(AppendValuesResponse.to_json())

# convert the object into a dict
append_values_response_dict = append_values_response_instance.to_dict()
# create an instance of AppendValuesResponse from a dict
append_values_response_from_dict = AppendValuesResponse.from_dict(append_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


