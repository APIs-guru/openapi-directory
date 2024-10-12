# PyTorchSettings

pyTorch job settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** | Command line arguments that need to be passed to the python script. | [optional] 
**communication_backend** | **str** | Type of the communication backend for distributed jobs. Valid values are &#39;TCP&#39;, &#39;Gloo&#39; or &#39;MPI&#39;. Not required for non-distributed jobs. | [optional] 
**process_count** | **int** | Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property | [optional] 
**python_interpreter_path** | **str** | The path to the Python interpreter. | [optional] 
**python_script_file_path** | **str** | The python script to execute. | 

## Example

```python
from openapi_client.models.py_torch_settings import PyTorchSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PyTorchSettings from a JSON string
py_torch_settings_instance = PyTorchSettings.from_json(json)
# print the JSON string representation of the object
print(PyTorchSettings.to_json())

# convert the object into a dict
py_torch_settings_dict = py_torch_settings_instance.to_dict()
# create an instance of PyTorchSettings from a dict
py_torch_settings_from_dict = PyTorchSettings.from_dict(py_torch_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


