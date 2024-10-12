# AudioAtom

The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**List[AudioChannel]**](AudioChannel.md) | List of &#x60;Channel&#x60;s for this audio stream. for in-depth explanation. | [optional] 
**key** | **str** | Required. The &#x60;EditAtom.key&#x60; that references the atom with audio inputs in the &#x60;Job.edit_list&#x60;. | [optional] 

## Example

```python
from openapi_client.models.audio_atom import AudioAtom

# TODO update the JSON string below
json = "{}"
# create an instance of AudioAtom from a JSON string
audio_atom_instance = AudioAtom.from_json(json)
# print the JSON string representation of the object
print(AudioAtom.to_json())

# convert the object into a dict
audio_atom_dict = audio_atom_instance.to_dict()
# create an instance of AudioAtom from a dict
audio_atom_from_dict = AudioAtom.from_dict(audio_atom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


