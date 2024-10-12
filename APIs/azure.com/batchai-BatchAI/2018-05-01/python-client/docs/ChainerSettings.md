# ChainerSettings

Chainer job settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** | Command line arguments that need to be passed to the python script. | [optional] 
**process_count** | **int** | Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property | [optional] 
**python_interpreter_path** | **str** | The path to the Python interpreter. | [optional] 
**python_script_file_path** | **str** | The python script to execute. | 

## Example

```python
from openapi_client.models.chainer_settings import ChainerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ChainerSettings from a JSON string
chainer_settings_instance = ChainerSettings.from_json(json)
# print the JSON string representation of the object
print(ChainerSettings.to_json())

# convert the object into a dict
chainer_settings_dict = chainer_settings_instance.to_dict()
# create an instance of ChainerSettings from a dict
chainer_settings_from_dict = ChainerSettings.from_dict(chainer_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


