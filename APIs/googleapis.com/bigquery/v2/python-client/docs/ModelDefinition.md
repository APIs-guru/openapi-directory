# ModelDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_options** | [**ModelDefinitionModelOptions**](ModelDefinitionModelOptions.md) |  | [optional] 
**training_runs** | [**List[BqmlTrainingRun]**](BqmlTrainingRun.md) | Deprecated. | [optional] 

## Example

```python
from openapi_client.models.model_definition import ModelDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDefinition from a JSON string
model_definition_instance = ModelDefinition.from_json(json)
# print the JSON string representation of the object
print(ModelDefinition.to_json())

# convert the object into a dict
model_definition_dict = model_definition_instance.to_dict()
# create an instance of ModelDefinition from a dict
model_definition_from_dict = ModelDefinition.from_dict(model_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


