# MetricAlertStatusProperties

An alert status properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **Dict[str, str]** | An object describing the type of the dimensions. | [optional] 
**status** | **str** | status value | [optional] 
**timestamp** | **datetime** | UTC time when the status was checked. | [optional] 

## Example

```python
from openapi_client.models.metric_alert_status_properties import MetricAlertStatusProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertStatusProperties from a JSON string
metric_alert_status_properties_instance = MetricAlertStatusProperties.from_json(json)
# print the JSON string representation of the object
print(MetricAlertStatusProperties.to_json())

# convert the object into a dict
metric_alert_status_properties_dict = metric_alert_status_properties_instance.to_dict()
# create an instance of MetricAlertStatusProperties from a dict
metric_alert_status_properties_from_dict = MetricAlertStatusProperties.from_dict(metric_alert_status_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


