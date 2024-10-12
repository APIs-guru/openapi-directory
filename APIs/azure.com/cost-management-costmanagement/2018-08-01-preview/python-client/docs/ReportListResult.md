# ReportListResult

Result of listing reports. It contains a list of available reports in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Report]**](Report.md) | The list of reports. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report_list_result import ReportListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReportListResult from a JSON string
report_list_result_instance = ReportListResult.from_json(json)
# print the JSON string representation of the object
print(ReportListResult.to_json())

# convert the object into a dict
report_list_result_dict = report_list_result_instance.to_dict()
# create an instance of ReportListResult from a dict
report_list_result_from_dict = ReportListResult.from_dict(report_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


