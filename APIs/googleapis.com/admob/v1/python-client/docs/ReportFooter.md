# ReportFooter

Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matching_row_count** | **str** | Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response. | [optional] 
**warnings** | [**List[ReportWarning]**](ReportWarning.md) | Warnings associated with generation of the report. | [optional] 

## Example

```python
from openapi_client.models.report_footer import ReportFooter

# TODO update the JSON string below
json = "{}"
# create an instance of ReportFooter from a JSON string
report_footer_instance = ReportFooter.from_json(json)
# print the JSON string representation of the object
print(ReportFooter.to_json())

# convert the object into a dict
report_footer_dict = report_footer_instance.to_dict()
# create an instance of ReportFooter from a dict
report_footer_from_dict = ReportFooter.from_dict(report_footer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


