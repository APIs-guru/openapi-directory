# XPSReportingMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_training_duration** | **str** | The effective time training used. If set, this is used for quota management and billing. Deprecated. AutoML BE doesn&#39;t use this. Don&#39;t set. | [optional] 
**metric_entries** | [**List[XPSMetricEntry]**](XPSMetricEntry.md) | One entry per metric name. The values must be aggregated per metric name. | [optional] 

## Example

```python
from openapi_client.models.xps_reporting_metrics import XPSReportingMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSReportingMetrics from a JSON string
xps_reporting_metrics_instance = XPSReportingMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSReportingMetrics.to_json())

# convert the object into a dict
xps_reporting_metrics_dict = xps_reporting_metrics_instance.to_dict()
# create an instance of XPSReportingMetrics from a dict
xps_reporting_metrics_from_dict = XPSReportingMetrics.from_dict(xps_reporting_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


