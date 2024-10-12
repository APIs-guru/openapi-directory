# Caffe2Settings

Caffe2 job settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** | Command line arguments that need to be passed to the python script. | [optional] 
**python_interpreter_path** | **str** | The path to the Python interpreter. | [optional] 
**python_script_file_path** | **str** | The python script to execute. | 

## Example

```python
from openapi_client.models.caffe2_settings import Caffe2Settings

# TODO update the JSON string below
json = "{}"
# create an instance of Caffe2Settings from a JSON string
caffe2_settings_instance = Caffe2Settings.from_json(json)
# print the JSON string representation of the object
print(Caffe2Settings.to_json())

# convert the object into a dict
caffe2_settings_dict = caffe2_settings_instance.to_dict()
# create an instance of Caffe2Settings from a dict
caffe2_settings_from_dict = Caffe2Settings.from_dict(caffe2_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


