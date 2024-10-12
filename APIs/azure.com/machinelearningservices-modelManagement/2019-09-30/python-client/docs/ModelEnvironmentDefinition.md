# ModelEnvironmentDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docker** | [**ModelDockerSection**](ModelDockerSection.md) |  | [optional] 
**environment_variables** | **Dict[str, str]** | Definition of environment variables to be defined in the environment. | [optional] 
**inferencing_stack_version** | **str** | The Inferencing stack version. | [optional] 
**name** | **str** | The name of the environment. | [optional] 
**python** | [**ModelPythonSection**](ModelPythonSection.md) |  | [optional] 
**spark** | [**ModelSparkSection**](ModelSparkSection.md) |  | [optional] 
**version** | **str** | The environment version. | [optional] 

## Example

```python
from openapi_client.models.model_environment_definition import ModelEnvironmentDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ModelEnvironmentDefinition from a JSON string
model_environment_definition_instance = ModelEnvironmentDefinition.from_json(json)
# print the JSON string representation of the object
print(ModelEnvironmentDefinition.to_json())

# convert the object into a dict
model_environment_definition_dict = model_environment_definition_instance.to_dict()
# create an instance of ModelEnvironmentDefinition from a dict
model_environment_definition_from_dict = ModelEnvironmentDefinition.from_dict(model_environment_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


