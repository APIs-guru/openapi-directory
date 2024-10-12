# ActionMetricValidations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum** | [**ActionMetricValidationsMaximum**](ActionMetricValidationsMaximum.md) |  | [optional] 
**minimum** | [**ActionMetricValidationsMaximum**](ActionMetricValidationsMaximum.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_metric_validations import ActionMetricValidations

# TODO update the JSON string below
json = "{}"
# create an instance of ActionMetricValidations from a JSON string
action_metric_validations_instance = ActionMetricValidations.from_json(json)
# print the JSON string representation of the object
print(ActionMetricValidations.to_json())

# convert the object into a dict
action_metric_validations_dict = action_metric_validations_instance.to_dict()
# create an instance of ActionMetricValidations from a dict
action_metric_validations_from_dict = ActionMetricValidations.from_dict(action_metric_validations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


