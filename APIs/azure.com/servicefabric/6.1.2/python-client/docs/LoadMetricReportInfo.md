# LoadMetricReportInfo

Information about load reported by replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_reported_utc** | **datetime** | The UTC time when the load is reported. | [optional] 
**name** | **str** | The name of the metric. | [optional] 
**value** | **int** | The value of the load for the metric.. | [optional] 

## Example

```python
from openapi_client.models.load_metric_report_info import LoadMetricReportInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LoadMetricReportInfo from a JSON string
load_metric_report_info_instance = LoadMetricReportInfo.from_json(json)
# print the JSON string representation of the object
print(LoadMetricReportInfo.to_json())

# convert the object into a dict
load_metric_report_info_dict = load_metric_report_info_instance.to_dict()
# create an instance of LoadMetricReportInfo from a dict
load_metric_report_info_from_dict = LoadMetricReportInfo.from_dict(load_metric_report_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


