# BatchUpdateValuesResponse

The response when updating a range of values in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[UpdateValuesResponse]**](UpdateValuesResponse.md) | One UpdateValuesResponse per requested range, in the same order as the requests appeared. | [optional] 
**spreadsheet_id** | **str** | The spreadsheet the updates were applied to. | [optional] 
**total_updated_cells** | **int** | The total number of cells updated. | [optional] 
**total_updated_columns** | **int** | The total number of columns where at least one cell in the column was updated. | [optional] 
**total_updated_rows** | **int** | The total number of rows where at least one cell in the row was updated. | [optional] 
**total_updated_sheets** | **int** | The total number of sheets where at least one cell in the sheet was updated. | [optional] 

## Example

```python
from openapi_client.models.batch_update_values_response import BatchUpdateValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateValuesResponse from a JSON string
batch_update_values_response_instance = BatchUpdateValuesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateValuesResponse.to_json())

# convert the object into a dict
batch_update_values_response_dict = batch_update_values_response_instance.to_dict()
# create an instance of BatchUpdateValuesResponse from a dict
batch_update_values_response_from_dict = BatchUpdateValuesResponse.from_dict(batch_update_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


