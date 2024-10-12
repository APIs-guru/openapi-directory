# MetricSettings

Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation. | [optional] 
**enabled** | **bool** | a value indicating whether this category is enabled. | 
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | [optional] 
**time_grain** | **str** | the timegrain of the metric in ISO8601 format. | [optional] 

## Example

```python
from openapi_client.models.metric_settings import MetricSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSettings from a JSON string
metric_settings_instance = MetricSettings.from_json(json)
# print the JSON string representation of the object
print(MetricSettings.to_json())

# convert the object into a dict
metric_settings_dict = metric_settings_instance.to_dict()
# create an instance of MetricSettings from a dict
metric_settings_from_dict = MetricSettings.from_dict(metric_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


