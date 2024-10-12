# MetricAlertCriteria

The rule criteria that defines the conditions of the alert rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | specifies the type of the alert criteria. | 

## Example

```python
from openapi_client.models.metric_alert_criteria import MetricAlertCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertCriteria from a JSON string
metric_alert_criteria_instance = MetricAlertCriteria.from_json(json)
# print the JSON string representation of the object
print(MetricAlertCriteria.to_json())

# convert the object into a dict
metric_alert_criteria_dict = metric_alert_criteria_instance.to_dict()
# create an instance of MetricAlertCriteria from a dict
metric_alert_criteria_from_dict = MetricAlertCriteria.from_dict(metric_alert_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


