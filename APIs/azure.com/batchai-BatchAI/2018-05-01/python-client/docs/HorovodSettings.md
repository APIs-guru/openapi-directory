# HorovodSettings

Specifies the settings for Horovod job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** | Command line arguments that need to be passed to the python script. | [optional] 
**process_count** | **int** | Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property | [optional] 
**python_interpreter_path** | **str** | The path to the Python interpreter. | [optional] 
**python_script_file_path** | **str** | The python script to execute. | 

## Example

```python
from openapi_client.models.horovod_settings import HorovodSettings

# TODO update the JSON string below
json = "{}"
# create an instance of HorovodSettings from a JSON string
horovod_settings_instance = HorovodSettings.from_json(json)
# print the JSON string representation of the object
print(HorovodSettings.to_json())

# convert the object into a dict
horovod_settings_dict = horovod_settings_instance.to_dict()
# create an instance of HorovodSettings from a dict
horovod_settings_from_dict = HorovodSettings.from_dict(horovod_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


