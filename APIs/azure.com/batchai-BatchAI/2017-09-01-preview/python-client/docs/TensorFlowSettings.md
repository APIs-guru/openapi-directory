# TensorFlowSettings

Specifies the settings for TensorFlow job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**master_command_line_args** | **str** |  | 
**parameter_server_command_line_args** | **str** | This property is optional for single machine training. | [optional] 
**parameter_server_count** | **int** | If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training (This property is not applicable for single machine training). This property can be specified only for distributed TensorFlow training. | [optional] 
**python_interpreter_path** | **str** |  | [optional] 
**python_script_file_path** | **str** |  | 
**worker_command_line_args** | **str** | This property is optional for single machine training. | [optional] 
**worker_count** | **int** | If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training | [optional] 

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


