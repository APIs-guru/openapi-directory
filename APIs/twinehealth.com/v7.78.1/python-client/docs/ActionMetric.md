# ActionMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goal** | **object** |  | [optional] 
**metric_type** | **str** |  | [optional] 
**unit** | **str** |  | [optional] 
**validations** | [**ActionMetricValidations**](ActionMetricValidations.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_metric import ActionMetric

# TODO update the JSON string below
json = "{}"
# create an instance of ActionMetric from a JSON string
action_metric_instance = ActionMetric.from_json(json)
# print the JSON string representation of the object
print(ActionMetric.to_json())

# convert the object into a dict
action_metric_dict = action_metric_instance.to_dict()
# create an instance of ActionMetric from a dict
action_metric_from_dict = ActionMetric.from_dict(action_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


