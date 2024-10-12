# ExperimentModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**changed_fields_and_initial_values** | **object** |  | [optional] 
**complete** | **bool** |  | [optional] 
**config** | [**ExperimentConfigModel**](ExperimentConfigModel.md) |  | [optional] 
**end_date** | **datetime** |  | [optional] 
**id** | **int** |  | [optional] 
**measurements** | **str** |  | [optional] 
**measurements_es_query** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**percent_hash** | **str** |  | [optional] 
**published_stages** | **List[str]** |  | [optional] 
**start_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.experiment_model import ExperimentModel

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentModel from a JSON string
experiment_model_instance = ExperimentModel.from_json(json)
# print the JSON string representation of the object
print(ExperimentModel.to_json())

# convert the object into a dict
experiment_model_dict = experiment_model_instance.to_dict()
# create an instance of ExperimentModel from a dict
experiment_model_from_dict = ExperimentModel.from_dict(experiment_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


