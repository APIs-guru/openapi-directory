# ModelPythonSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_conda_environment** | **str** |  | [optional] 
**conda_dependencies** | **object** |  | [optional] 
**interpreter_path** | **str** | The python interpreter path. This is only used when user_managed_dependencies&#x3D;True. | [optional] 
**user_managed_dependencies** | **bool** | True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification. | [optional] 

## Example

```python
from openapi_client.models.model_python_section import ModelPythonSection

# TODO update the JSON string below
json = "{}"
# create an instance of ModelPythonSection from a JSON string
model_python_section_instance = ModelPythonSection.from_json(json)
# print the JSON string representation of the object
print(ModelPythonSection.to_json())

# convert the object into a dict
model_python_section_dict = model_python_section_instance.to_dict()
# create an instance of ModelPythonSection from a dict
model_python_section_from_dict = ModelPythonSection.from_dict(model_python_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


