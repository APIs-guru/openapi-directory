# StandardEncoderPreset

Describes all the settings to be used when encoding the input video with the Standard Encoder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codecs** | [**List[Codec]**](Codec.md) | The list of codecs to be used when encoding the input video. | [optional] 
**filters** | [**Filters**](Filters.md) |  | [optional] 
**formats** | [**List[Format]**](Format.md) | The list of outputs to be produced by the encoder. | [optional] 

## Example

```python
from openapi_client.models.standard_encoder_preset import StandardEncoderPreset

# TODO update the JSON string below
json = "{}"
# create an instance of StandardEncoderPreset from a JSON string
standard_encoder_preset_instance = StandardEncoderPreset.from_json(json)
# print the JSON string representation of the object
print(StandardEncoderPreset.to_json())

# convert the object into a dict
standard_encoder_preset_dict = standard_encoder_preset_instance.to_dict()
# create an instance of StandardEncoderPreset from a dict
standard_encoder_preset_from_dict = StandardEncoderPreset.from_dict(standard_encoder_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


