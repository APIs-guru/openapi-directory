# Report


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averages** | **List[str]** | The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. | [optional] 
**headers** | [**List[ReportHeadersInner]**](ReportHeadersInner.md) | The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request. | [optional] 
**kind** | **str** | Kind this is, in this case adsensehost#report. | [optional] [default to 'adsensehost#report']
**rows** | **List[List[str]]** | The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers. | [optional] 
**total_matched_rows** | **str** | The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit. | [optional] 
**totals** | **List[str]** | The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. | [optional] 
**warnings** | **List[str]** | Any warnings associated with generation of the report. | [optional] 

## Example

```python
from openapi_client.models.report import Report

# TODO update the JSON string below
json = "{}"
# create an instance of Report from a JSON string
report_instance = Report.from_json(json)
# print the JSON string representation of the object
print(Report.to_json())

# convert the object into a dict
report_dict = report_instance.to_dict()
# create an instance of Report from a dict
report_from_dict = Report.from_dict(report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


