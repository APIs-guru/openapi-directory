# CostThresholdProperties

Properties of a cost threshold item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_on_chart** | **str** | Indicates whether this threshold will be displayed on cost charts. | [optional] 
**notification_sent** | **str** | Indicates the datetime when notifications were last sent for this threshold. | [optional] 
**percentage_threshold** | [**PercentageCostThresholdProperties**](PercentageCostThresholdProperties.md) |  | [optional] 
**send_notification_when_exceeded** | **str** | Indicates whether notifications will be sent when this threshold is exceeded. | [optional] 
**threshold_id** | **str** | The ID of the cost threshold item. | [optional] 

## Example

```python
from openapi_client.models.cost_threshold_properties import CostThresholdProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CostThresholdProperties from a JSON string
cost_threshold_properties_instance = CostThresholdProperties.from_json(json)
# print the JSON string representation of the object
print(CostThresholdProperties.to_json())

# convert the object into a dict
cost_threshold_properties_dict = cost_threshold_properties_instance.to_dict()
# create an instance of CostThresholdProperties from a dict
cost_threshold_properties_from_dict = CostThresholdProperties.from_dict(cost_threshold_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


