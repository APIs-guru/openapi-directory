# CaffeSettings

Caffe job settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** | Command line arguments that need to be passed to the Caffe job. | [optional] 
**config_file_path** | **str** | Path of the config file for the job. This property cannot be specified if pythonScriptFilePath is specified. | [optional] 
**process_count** | **int** | Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property | [optional] 
**python_interpreter_path** | **str** | The path to the Python interpreter. The property can be specified only if the pythonScriptFilePath is specified. | [optional] 
**python_script_file_path** | **str** | Python script to execute. This property cannot be specified if configFilePath is specified. | [optional] 

## Example

```python
from openapi_client.models.caffe_settings import CaffeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CaffeSettings from a JSON string
caffe_settings_instance = CaffeSettings.from_json(json)
# print the JSON string representation of the object
print(CaffeSettings.to_json())

# convert the object into a dict
caffe_settings_dict = caffe_settings_instance.to_dict()
# create an instance of CaffeSettings from a dict
caffe_settings_from_dict = CaffeSettings.from_dict(caffe_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


