# AudioMapping

The mapping for the JobConfig.edit_list atoms with audio EditAtom.inputs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atom_key** | **str** | Required. The EditAtom.key that references the atom with audio inputs in the JobConfig.edit_list. | [optional] 
**gain_db** | **float** | Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0. | [optional] 
**input_channel** | **int** | Required. The zero-based index of the channel in the input audio stream. | [optional] 
**input_key** | **str** | Required. The Input.key that identifies the input file. | [optional] 
**input_track** | **int** | Required. The zero-based index of the track in the input file. | [optional] 
**output_channel** | **int** | Required. The zero-based index of the channel in the output audio stream. | [optional] 

## Example

```python
from openapi_client.models.audio_mapping import AudioMapping

# TODO update the JSON string below
json = "{}"
# create an instance of AudioMapping from a JSON string
audio_mapping_instance = AudioMapping.from_json(json)
# print the JSON string representation of the object
print(AudioMapping.to_json())

# convert the object into a dict
audio_mapping_dict = audio_mapping_instance.to_dict()
# create an instance of AudioMapping from a dict
audio_mapping_from_dict = AudioMapping.from_dict(audio_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


