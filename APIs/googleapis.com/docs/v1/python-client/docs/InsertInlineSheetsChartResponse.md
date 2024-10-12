# InsertInlineSheetsChartResponse

The result of inserting an embedded Google Sheets chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the inserted chart. | [optional] 

## Example

```python
from openapi_client.models.insert_inline_sheets_chart_response import InsertInlineSheetsChartResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InsertInlineSheetsChartResponse from a JSON string
insert_inline_sheets_chart_response_instance = InsertInlineSheetsChartResponse.from_json(json)
# print the JSON string representation of the object
print(InsertInlineSheetsChartResponse.to_json())

# convert the object into a dict
insert_inline_sheets_chart_response_dict = insert_inline_sheets_chart_response_instance.to_dict()
# create an instance of InsertInlineSheetsChartResponse from a dict
insert_inline_sheets_chart_response_from_dict = InsertInlineSheetsChartResponse.from_dict(insert_inline_sheets_chart_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


