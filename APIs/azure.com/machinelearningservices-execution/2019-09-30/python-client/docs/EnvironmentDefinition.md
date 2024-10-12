# EnvironmentDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docker** | [**DockerSection**](DockerSection.md) |  | [optional] 
**environment_variables** | **Dict[str, str]** | Definition of environment variables to be defined in the environment. | [optional] 
**inferencing_stack_version** | **str** | The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: \&quot;latest\&quot;. | [optional] 
**name** | **str** | The name of the environment. | [optional] 
**python** | [**PythonSection**](PythonSection.md) |  | [optional] 
**spark** | [**SparkSection**](SparkSection.md) |  | [optional] 
**version** | **str** | The environment version. | [optional] 

## Example

```python
from openapi_client.models.environment_definition import EnvironmentDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentDefinition from a JSON string
environment_definition_instance = EnvironmentDefinition.from_json(json)
# print the JSON string representation of the object
print(EnvironmentDefinition.to_json())

# convert the object into a dict
environment_definition_dict = environment_definition_instance.to_dict()
# create an instance of EnvironmentDefinition from a dict
environment_definition_from_dict = EnvironmentDefinition.from_dict(environment_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


