# MetricAlertStatus

An alert status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The alert rule arm id. | [optional] 
**name** | **str** | The status name. | [optional] 
**properties** | [**MetricAlertStatusProperties**](MetricAlertStatusProperties.md) |  | [optional] 
**type** | **str** | The extended resource type name. | [optional] 

## Example

```python
from openapi_client.models.metric_alert_status import MetricAlertStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertStatus from a JSON string
metric_alert_status_instance = MetricAlertStatus.from_json(json)
# print the JSON string representation of the object
print(MetricAlertStatus.to_json())

# convert the object into a dict
metric_alert_status_dict = metric_alert_status_instance.to_dict()
# create an instance of MetricAlertStatus from a dict
metric_alert_status_from_dict = MetricAlertStatus.from_dict(metric_alert_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


