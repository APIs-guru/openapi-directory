# MetricAlertAction

An alert action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_group_id** | **str** | the id of the action group to use. | [optional] 
**webhook_properties** | **Dict[str, str]** | The properties of a webhook object. | [optional] 

## Example

```python
from openapi_client.models.metric_alert_action import MetricAlertAction

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertAction from a JSON string
metric_alert_action_instance = MetricAlertAction.from_json(json)
# print the JSON string representation of the object
print(MetricAlertAction.to_json())

# convert the object into a dict
metric_alert_action_dict = metric_alert_action_instance.to_dict()
# create an instance of MetricAlertAction from a dict
metric_alert_action_from_dict = MetricAlertAction.from_dict(metric_alert_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


