# MonitoringQueryLanguageCondition

A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly. | [optional] 
**evaluation_missing_data** | **str** | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. | [optional] 
**query** | **str** | Monitoring Query Language (https://cloud.google.com/monitoring/mql) query that outputs a boolean stream. | [optional] 
**trigger** | [**Trigger**](Trigger.md) |  | [optional] 

## Example

```python
from openapi_client.models.monitoring_query_language_condition import MonitoringQueryLanguageCondition

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringQueryLanguageCondition from a JSON string
monitoring_query_language_condition_instance = MonitoringQueryLanguageCondition.from_json(json)
# print the JSON string representation of the object
print(MonitoringQueryLanguageCondition.to_json())

# convert the object into a dict
monitoring_query_language_condition_dict = monitoring_query_language_condition_instance.to_dict()
# create an instance of MonitoringQueryLanguageCondition from a dict
monitoring_query_language_condition_from_dict = MonitoringQueryLanguageCondition.from_dict(monitoring_query_language_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


