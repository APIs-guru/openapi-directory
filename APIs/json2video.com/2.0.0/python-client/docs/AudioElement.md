# AudioElement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**muted** | **bool** | Mutes the audio | [optional] [default to False]
**volume** | **float** |  | [optional] [default to 5]

## Example

```python
from openapi_client.models.audio_element import AudioElement

# TODO update the JSON string below
json = "{}"
# create an instance of AudioElement from a JSON string
audio_element_instance = AudioElement.from_json(json)
# print the JSON string representation of the object
print(AudioElement.to_json())

# convert the object into a dict
audio_element_dict = audio_element_instance.to_dict()
# create an instance of AudioElement from a dict
audio_element_from_dict = AudioElement.from_dict(audio_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


