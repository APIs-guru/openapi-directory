# PerformanceCountersSettings

Performance counters reporting settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_insights_reference** | [**AppInsightsReference**](AppInsightsReference.md) |  | 

## Example

```python
from openapi_client.models.performance_counters_settings import PerformanceCountersSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceCountersSettings from a JSON string
performance_counters_settings_instance = PerformanceCountersSettings.from_json(json)
# print the JSON string representation of the object
print(PerformanceCountersSettings.to_json())

# convert the object into a dict
performance_counters_settings_dict = performance_counters_settings_instance.to_dict()
# create an instance of PerformanceCountersSettings from a dict
performance_counters_settings_from_dict = PerformanceCountersSettings.from_dict(performance_counters_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


