# Caffe2Settings

Specifies the settings for Caffe2 job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** |  | [optional] 
**python_interpreter_path** | **str** |  | [optional] 
**python_script_file_path** | **str** |  | 

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


