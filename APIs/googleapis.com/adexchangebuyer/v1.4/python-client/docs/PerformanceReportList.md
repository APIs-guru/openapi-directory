# PerformanceReportList

The configuration data for an Ad Exchange performance report list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#performanceReportList']
**performance_report** | [**List[PerformanceReport]**](PerformanceReport.md) | A list of performance reports relevant for the account. | [optional] 

## Example

```python
from openapi_client.models.performance_report_list import PerformanceReportList

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceReportList from a JSON string
performance_report_list_instance = PerformanceReportList.from_json(json)
# print the JSON string representation of the object
print(PerformanceReportList.to_json())

# convert the object into a dict
performance_report_list_dict = performance_report_list_instance.to_dict()
# create an instance of PerformanceReportList from a dict
performance_report_list_from_dict = PerformanceReportList.from_dict(performance_report_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


