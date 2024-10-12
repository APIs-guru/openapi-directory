# ExperimentProperties

Defines the properties of an experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the details or intents of the Experiment | [optional] 
**enabled_state** | **str** | The state of the Experiment | [optional] 
**endpoint_a** | [**Endpoint**](Endpoint.md) |  | [optional] 
**endpoint_b** | [**Endpoint**](Endpoint.md) |  | [optional] 
**resource_state** | [**NetworkExperimentResourceState**](NetworkExperimentResourceState.md) |  | [optional] 
**script_file_uri** | **str** | The uri to the Script used in the Experiment | [optional] [readonly] 
**status** | **str** | The description of Experiment status from the server side | [optional] [readonly] 

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


