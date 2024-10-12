# BuiltInStandardEncoderPreset

Describes a built-in preset for encoding the input video with the Standard Encoder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preset_name** | **str** | The built-in preset to be used for encoding videos. | 

## Example

```python
from openapi_client.models.built_in_standard_encoder_preset import BuiltInStandardEncoderPreset

# TODO update the JSON string below
json = "{}"
# create an instance of BuiltInStandardEncoderPreset from a JSON string
built_in_standard_encoder_preset_instance = BuiltInStandardEncoderPreset.from_json(json)
# print the JSON string representation of the object
print(BuiltInStandardEncoderPreset.to_json())

# convert the object into a dict
built_in_standard_encoder_preset_dict = built_in_standard_encoder_preset_instance.to_dict()
# create an instance of BuiltInStandardEncoderPreset from a dict
built_in_standard_encoder_preset_from_dict = BuiltInStandardEncoderPreset.from_dict(built_in_standard_encoder_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


