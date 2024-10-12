# LoadMetricReport

Represents the load metric report which contains the time metric was reported, its name and value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_reported_utc** | **datetime** | Gets the UTC time when the load was reported. | [optional] 
**name** | **str** | The name of the load metric. | [optional] 
**value** | **str** | The value of the load metric. | [optional] 

## Example

```python
from openapi_client.models.load_metric_report import LoadMetricReport

# TODO update the JSON string below
json = "{}"
# create an instance of LoadMetricReport from a JSON string
load_metric_report_instance = LoadMetricReport.from_json(json)
# print the JSON string representation of the object
print(LoadMetricReport.to_json())

# convert the object into a dict
load_metric_report_dict = load_metric_report_instance.to_dict()
# create an instance of LoadMetricReport from a dict
load_metric_report_from_dict = LoadMetricReport.from_dict(load_metric_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


