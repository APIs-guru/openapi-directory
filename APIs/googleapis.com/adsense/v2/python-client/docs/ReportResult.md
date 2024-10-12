# ReportResult

Result of a generated report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averages** | [**Row**](Row.md) |  | [optional] 
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**headers** | [**List[Header]**](Header.md) | The header information; one for each dimension in the request, followed by one for each metric in the request. | [optional] 
**rows** | [**List[Row]**](Row.md) | The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**total_matched_rows** | **str** | The total number of rows matched by the report request. | [optional] 
**totals** | [**Row**](Row.md) |  | [optional] 
**warnings** | **List[str]** | Any warnings associated with generation of the report. These warnings are always returned in English. | [optional] 

## Example

```python
from openapi_client.models.report_result import ReportResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReportResult from a JSON string
report_result_instance = ReportResult.from_json(json)
# print the JSON string representation of the object
print(ReportResult.to_json())

# convert the object into a dict
report_result_dict = report_result_instance.to_dict()
# create an instance of ReportResult from a dict
report_result_from_dict = ReportResult.from_dict(report_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


