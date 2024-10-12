# ExperimentProperties

Experiment properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Time when the Experiment was created. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioned state of the experiment | [optional] [readonly] 
**provisioning_state_transition_time** | **datetime** | The time at which the experiment entered its current provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.experiment_properties import ExperimentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentProperties from a JSON string
experiment_properties_instance = ExperimentProperties.from_json(json)
# print the JSON string representation of the object
print(ExperimentProperties.to_json())

# convert the object into a dict
experiment_properties_dict = experiment_properties_instance.to_dict()
# create an instance of ExperimentProperties from a dict
experiment_properties_from_dict = ExperimentProperties.from_dict(experiment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


