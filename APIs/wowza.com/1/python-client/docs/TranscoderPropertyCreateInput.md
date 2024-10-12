# TranscoderPropertyCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | [**Property1**](Property1.md) |  | 

## Example

```python
from openapi_client.models.transcoder_property_create_input import TranscoderPropertyCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of TranscoderPropertyCreateInput from a JSON string
transcoder_property_create_input_instance = TranscoderPropertyCreateInput.from_json(json)
# print the JSON string representation of the object
print(TranscoderPropertyCreateInput.to_json())

# convert the object into a dict
transcoder_property_create_input_dict = transcoder_property_create_input_instance.to_dict()
# create an instance of TranscoderPropertyCreateInput from a dict
transcoder_property_create_input_from_dict = TranscoderPropertyCreateInput.from_dict(transcoder_property_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


