# CaffeSettings

Specifies the settings for Caffe job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** |  | [optional] 
**config_file_path** | **str** | This property cannot be specified if pythonScriptFilePath is specified. | [optional] 
**process_count** | **int** | The default value for this property is equal to nodeCount property | [optional] 
**python_interpreter_path** | **str** | This property can be specified only if the pythonScriptFilePath is specified. | [optional] 
**python_script_file_path** | **str** | This property cannot be specified if configFilePath is specified. | [optional] 

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


