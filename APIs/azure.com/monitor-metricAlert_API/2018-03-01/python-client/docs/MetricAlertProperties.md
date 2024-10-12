# MetricAlertProperties

An alert rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[MetricAlertAction]**](MetricAlertAction.md) | the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. | [optional] 
**auto_mitigate** | **bool** | the flag that indicates whether the alert should be auto resolved or not. | [optional] 
**criteria** | [**MetricAlertCriteria**](MetricAlertCriteria.md) |  | 
**description** | **str** | the description of the metric alert that will be included in the alert email. | 
**enabled** | **bool** | the flag that indicates whether the metric alert is enabled. | 
**evaluation_frequency** | **str** | how often the metric alert is evaluated represented in ISO 8601 duration format. | 
**last_updated_time** | **datetime** | Last time the rule was updated in ISO8601 format. | [optional] [readonly] 
**scopes** | **List[str]** | the list of resource id&#39;s that this metric alert is scoped to. | [optional] 
**severity** | **int** | Alert severity {0, 1, 2, 3, 4} | 
**target_resource_region** | **str** | the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria. | [optional] 
**target_resource_type** | **str** | the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria. | [optional] 
**window_size** | **str** | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. | 

## Example

```python
from openapi_client.models.metric_alert_properties import MetricAlertProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertProperties from a JSON string
metric_alert_properties_instance = MetricAlertProperties.from_json(json)
# print the JSON string representation of the object
print(MetricAlertProperties.to_json())

# convert the object into a dict
metric_alert_properties_dict = metric_alert_properties_instance.to_dict()
# create an instance of MetricAlertProperties from a dict
metric_alert_properties_from_dict = MetricAlertProperties.from_dict(metric_alert_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


