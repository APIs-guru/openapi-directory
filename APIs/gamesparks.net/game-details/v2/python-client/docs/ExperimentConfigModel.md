# ExperimentConfigModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_mongo_query** | **str** |  | [optional] 
**player_query** | **str** |  | [optional] 
**variants** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.experiment_config_model import ExperimentConfigModel

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentConfigModel from a JSON string
experiment_config_model_instance = ExperimentConfigModel.from_json(json)
# print the JSON string representation of the object
print(ExperimentConfigModel.to_json())

# convert the object into a dict
experiment_config_model_dict = experiment_config_model_instance.to_dict()
# create an instance of ExperimentConfigModel from a dict
experiment_config_model_from_dict = ExperimentConfigModel.from_dict(experiment_config_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


