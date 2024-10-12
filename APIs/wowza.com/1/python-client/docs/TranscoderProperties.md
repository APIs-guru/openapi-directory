# TranscoderProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[TranscoderProperty]**](TranscoderProperty.md) |  | 

## Example

```python
from openapi_client.models.transcoder_properties import TranscoderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TranscoderProperties from a JSON string
transcoder_properties_instance = TranscoderProperties.from_json(json)
# print the JSON string representation of the object
print(TranscoderProperties.to_json())

# convert the object into a dict
transcoder_properties_dict = transcoder_properties_instance.to_dict()
# create an instance of TranscoderProperties from a dict
transcoder_properties_from_dict = TranscoderProperties.from_dict(transcoder_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


