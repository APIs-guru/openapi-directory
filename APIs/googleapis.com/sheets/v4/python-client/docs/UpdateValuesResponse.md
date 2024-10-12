# UpdateValuesResponse

The response when updating a range of values in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spreadsheet_id** | **str** | The spreadsheet the updates were applied to. | [optional] 
**updated_cells** | **int** | The number of cells updated. | [optional] 
**updated_columns** | **int** | The number of columns where at least one cell in the column was updated. | [optional] 
**updated_data** | [**ValueRange**](ValueRange.md) |  | [optional] 
**updated_range** | **str** | The range (in A1 notation) that updates were applied to. | [optional] 
**updated_rows** | **int** | The number of rows where at least one cell in the row was updated. | [optional] 

## Example

```python
from openapi_client.models.update_values_response import UpdateValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateValuesResponse from a JSON string
update_values_response_instance = UpdateValuesResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateValuesResponse.to_json())

# convert the object into a dict
update_values_response_dict = update_values_response_instance.to_dict()
# create an instance of UpdateValuesResponse from a dict
update_values_response_from_dict = UpdateValuesResponse.from_dict(update_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


