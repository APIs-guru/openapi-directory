# CNTKsettings

CNTK (aka Microsoft Cognitive Toolkit) job settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** | Command line arguments that need to be passed to the python script or cntk executable. | [optional] 
**config_file_path** | **str** | Specifies the path of the BrainScript config file. This property can be specified only if the languageType is &#39;BrainScript&#39;. | [optional] 
**language_type** | **str** | The language to use for launching CNTK (aka Microsoft Cognitive Toolkit) job. Valid values are &#39;BrainScript&#39; or &#39;Python&#39;. | [optional] 
**process_count** | **int** | Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property | [optional] 
**python_interpreter_path** | **str** | The path to the Python interpreter. This property can be specified only if the languageType is &#39;Python&#39;. | [optional] 
**python_script_file_path** | **str** | Python script to execute. This property can be specified only if the languageType is &#39;Python&#39;. | [optional] 

## Example

```python
from openapi_client.models.cnt_ksettings import CNTKsettings

# TODO update the JSON string below
json = "{}"
# create an instance of CNTKsettings from a JSON string
cnt_ksettings_instance = CNTKsettings.from_json(json)
# print the JSON string representation of the object
print(CNTKsettings.to_json())

# convert the object into a dict
cnt_ksettings_dict = cnt_ksettings_instance.to_dict()
# create an instance of CNTKsettings from a dict
cnt_ksettings_from_dict = CNTKsettings.from_dict(cnt_ksettings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


