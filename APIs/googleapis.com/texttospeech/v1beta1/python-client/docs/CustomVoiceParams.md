# CustomVoiceParams

Description of the custom voice to be synthesized.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Required. The name of the AutoML model that synthesizes the custom voice. | [optional] 
**reported_usage** | **str** | Optional. Deprecated. The usage of the synthesized audio to be reported. | [optional] 

## Example

```python
from openapi_client.models.custom_voice_params import CustomVoiceParams

# TODO update the JSON string below
json = "{}"
# create an instance of CustomVoiceParams from a JSON string
custom_voice_params_instance = CustomVoiceParams.from_json(json)
# print the JSON string representation of the object
print(CustomVoiceParams.to_json())

# convert the object into a dict
custom_voice_params_dict = custom_voice_params_instance.to_dict()
# create an instance of CustomVoiceParams from a dict
custom_voice_params_from_dict = CustomVoiceParams.from_dict(custom_voice_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


