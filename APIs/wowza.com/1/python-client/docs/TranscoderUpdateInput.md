# TranscoderUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcoder** | [**Transcoder9**](Transcoder9.md) |  | 

## Example

```python
from openapi_client.models.transcoder_update_input import TranscoderUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of TranscoderUpdateInput from a JSON string
transcoder_update_input_instance = TranscoderUpdateInput.from_json(json)
# print the JSON string representation of the object
print(TranscoderUpdateInput.to_json())

# convert the object into a dict
transcoder_update_input_dict = transcoder_update_input_instance.to_dict()
# create an instance of TranscoderUpdateInput from a dict
transcoder_update_input_from_dict = TranscoderUpdateInput.from_dict(transcoder_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


