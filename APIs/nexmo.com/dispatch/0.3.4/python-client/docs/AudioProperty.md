# AudioProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL of the audio attachment. &#x60;messenger&#x60; supports .mp3. &#x60;whatsapp&#x60; supports .aac, .m4a, .amr, .mp3 and .opus. | [optional] 

## Example

```python
from openapi_client.models.audio_property import AudioProperty

# TODO update the JSON string below
json = "{}"
# create an instance of AudioProperty from a JSON string
audio_property_instance = AudioProperty.from_json(json)
# print the JSON string representation of the object
print(AudioProperty.to_json())

# convert the object into a dict
audio_property_dict = audio_property_instance.to_dict()
# create an instance of AudioProperty from a dict
audio_property_from_dict = AudioProperty.from_dict(audio_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


