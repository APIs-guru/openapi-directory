# PythonSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_conda_environment** | **str** |  | [optional] 
**conda_dependencies** | **object** |  | [optional] 
**interpreter_path** | **str** | The python interpreter path. This is only used when user_managed_dependencies&#x3D;True. | [optional] 
**user_managed_dependencies** | **bool** | True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification. | [optional] 

## Example

```python
from openapi_client.models.python_section import PythonSection

# TODO update the JSON string below
json = "{}"
# create an instance of PythonSection from a JSON string
python_section_instance = PythonSection.from_json(json)
# print the JSON string representation of the object
print(PythonSection.to_json())

# convert the object into a dict
python_section_dict = python_section_instance.to_dict()
# create an instance of PythonSection from a dict
python_section_from_dict = PythonSection.from_dict(python_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


