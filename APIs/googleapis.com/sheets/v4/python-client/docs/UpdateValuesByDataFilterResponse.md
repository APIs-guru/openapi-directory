# UpdateValuesByDataFilterResponse

The response when updating a range of values by a data filter in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filter** | [**DataFilter**](DataFilter.md) |  | [optional] 
**updated_cells** | **int** | The number of cells updated. | [optional] 
**updated_columns** | **int** | The number of columns where at least one cell in the column was updated. | [optional] 
**updated_data** | [**ValueRange**](ValueRange.md) |  | [optional] 
**updated_range** | **str** | The range (in [A1 notation](/sheets/api/guides/concepts#cell)) that updates were applied to. | [optional] 
**updated_rows** | **int** | The number of rows where at least one cell in the row was updated. | [optional] 

## Example

```python
from openapi_client.models.update_values_by_data_filter_response import UpdateValuesByDataFilterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateValuesByDataFilterResponse from a JSON string
update_values_by_data_filter_response_instance = UpdateValuesByDataFilterResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateValuesByDataFilterResponse.to_json())

# convert the object into a dict
update_values_by_data_filter_response_dict = update_values_by_data_filter_response_instance.to_dict()
# create an instance of UpdateValuesByDataFilterResponse from a dict
update_values_by_data_filter_response_from_dict = UpdateValuesByDataFilterResponse.from_dict(update_values_by_data_filter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


