# CreateSheetsChartResponse

The result of creating an embedded Google Sheets chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the created chart. | [optional] 

## Example

```python
from openapi_client.models.create_sheets_chart_response import CreateSheetsChartResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSheetsChartResponse from a JSON string
create_sheets_chart_response_instance = CreateSheetsChartResponse.from_json(json)
# print the JSON string representation of the object
print(CreateSheetsChartResponse.to_json())

# convert the object into a dict
create_sheets_chart_response_dict = create_sheets_chart_response_instance.to_dict()
# create an instance of CreateSheetsChartResponse from a dict
create_sheets_chart_response_from_dict = CreateSheetsChartResponse.from_dict(create_sheets_chart_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


