# TensorFlowSettings

TensorFlow job settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**master_command_line_args** | **str** | Command line arguments that need to be passed to the python script for the master task. | [optional] 
**parameter_server_command_line_args** | **str** | Command line arguments that need to be passed to the python script for the parameter server. Optional for single process jobs. | [optional] 
**parameter_server_count** | **int** | The number of parameter server tasks. If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training. This property can be specified only for distributed TensorFlow training. | [optional] 
**python_interpreter_path** | **str** | The path to the Python interpreter. | [optional] 
**python_script_file_path** | **str** | The python script to execute. | 
**worker_command_line_args** | **str** | Command line arguments that need to be passed to the python script for the worker task. Optional for single process jobs. | [optional] 
**worker_count** | **int** | The number of worker tasks. If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training. | [optional] 

## Example

```python
from openapi_client.models.tensor_flow_settings import TensorFlowSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TensorFlowSettings from a JSON string
tensor_flow_settings_instance = TensorFlowSettings.from_json(json)
# print the JSON string representation of the object
print(TensorFlowSettings.to_json())

# convert the object into a dict
tensor_flow_settings_dict = tensor_flow_settings_instance.to_dict()
# create an instance of TensorFlowSettings from a dict
tensor_flow_settings_from_dict = TensorFlowSettings.from_dict(tensor_flow_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


