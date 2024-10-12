# CNTKsettings

Specifies the settings for CNTK (aka Microsoft Cognitive Toolkit) job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_args** | **str** |  | [optional] 
**config_file_path** | **str** | This property can be specified only if the languageType is &#39;BrainScript&#39;. | [optional] 
**language_type** | **str** | Valid values are &#39;BrainScript&#39; or &#39;Python&#39;. | [optional] 
**process_count** | **int** | The default value for this property is equal to nodeCount property | [optional] 
**python_interpreter_path** | **str** | This property can be specified only if the languageType is &#39;Python&#39;. | [optional] 
**python_script_file_path** | **str** | This property can be specified only if the languageType is &#39;Python&#39;. | [optional] 

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


