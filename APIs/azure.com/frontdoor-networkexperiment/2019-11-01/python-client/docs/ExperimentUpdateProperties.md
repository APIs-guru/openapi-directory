# ExperimentUpdateProperties

Defines the properties of an experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the intent or details of the Experiment | [optional] 
**enabled_state** | **str** | The state of the Experiment | [optional] 

## Example

```python
from openapi_client.models.experiment_update_properties import ExperimentUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentUpdateProperties from a JSON string
experiment_update_properties_instance = ExperimentUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ExperimentUpdateProperties.to_json())

# convert the object into a dict
experiment_update_properties_dict = experiment_update_properties_instance.to_dict()
# create an instance of ExperimentUpdateProperties from a dict
experiment_update_properties_from_dict = ExperimentUpdateProperties.from_dict(experiment_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


