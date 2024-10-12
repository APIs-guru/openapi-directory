# SynthesisInput

Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssml** | **str** | The SSML document to be synthesized. The SSML document must be valid and well-formed. Otherwise the RPC will fail and return google.rpc.Code.INVALID_ARGUMENT. For more information, see [SSML](https://cloud.google.com/text-to-speech/docs/ssml). | [optional] 
**text** | **str** | The raw text to be synthesized. | [optional] 

## Example

```python
from openapi_client.models.synthesis_input import SynthesisInput

# TODO update the JSON string below
json = "{}"
# create an instance of SynthesisInput from a JSON string
synthesis_input_instance = SynthesisInput.from_json(json)
# print the JSON string representation of the object
print(SynthesisInput.to_json())

# convert the object into a dict
synthesis_input_dict = synthesis_input_instance.to_dict()
# create an instance of SynthesisInput from a dict
synthesis_input_from_dict = SynthesisInput.from_dict(synthesis_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


