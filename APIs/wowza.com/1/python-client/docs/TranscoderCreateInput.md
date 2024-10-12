# TranscoderCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcoder** | [**Transcoder8**](Transcoder8.md) |  | 

## Example

```python
from openapi_client.models.transcoder_create_input import TranscoderCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of TranscoderCreateInput from a JSON string
transcoder_create_input_instance = TranscoderCreateInput.from_json(json)
# print the JSON string representation of the object
print(TranscoderCreateInput.to_json())

# convert the object into a dict
transcoder_create_input_dict = transcoder_create_input_instance.to_dict()
# create an instance of TranscoderCreateInput from a dict
transcoder_create_input_from_dict = TranscoderCreateInput.from_dict(transcoder_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


