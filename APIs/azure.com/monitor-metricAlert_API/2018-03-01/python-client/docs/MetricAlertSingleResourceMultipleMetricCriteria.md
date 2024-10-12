# MetricAlertSingleResourceMultipleMetricCriteria

Specifies the metric alert criteria for a single resource that has multiple metric criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_of** | [**List[MetricCriteria]**](MetricCriteria.md) | The list of metric criteria for this &#39;all of&#39; operation.  | [optional] 

## Example

```python
from openapi_client.models.metric_alert_single_resource_multiple_metric_criteria import MetricAlertSingleResourceMultipleMetricCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertSingleResourceMultipleMetricCriteria from a JSON string
metric_alert_single_resource_multiple_metric_criteria_instance = MetricAlertSingleResourceMultipleMetricCriteria.from_json(json)
# print the JSON string representation of the object
print(MetricAlertSingleResourceMultipleMetricCriteria.to_json())

# convert the object into a dict
metric_alert_single_resource_multiple_metric_criteria_dict = metric_alert_single_resource_multiple_metric_criteria_instance.to_dict()
# create an instance of MetricAlertSingleResourceMultipleMetricCriteria from a dict
metric_alert_single_resource_multiple_metric_criteria_from_dict = MetricAlertSingleResourceMultipleMetricCriteria.from_dict(metric_alert_single_resource_multiple_metric_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


