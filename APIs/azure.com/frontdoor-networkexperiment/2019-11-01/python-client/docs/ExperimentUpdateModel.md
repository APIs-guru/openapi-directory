# ExperimentUpdateModel

Defines modifiable attributes of an Experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ExperimentUpdateProperties**](ExperimentUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.experiment_update_model import ExperimentUpdateModel

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentUpdateModel from a JSON string
experiment_update_model_instance = ExperimentUpdateModel.from_json(json)
# print the JSON string representation of the object
print(ExperimentUpdateModel.to_json())

# convert the object into a dict
experiment_update_model_dict = experiment_update_model_instance.to_dict()
# create an instance of ExperimentUpdateModel from a dict
experiment_update_model_from_dict = ExperimentUpdateModel.from_dict(experiment_update_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


