# EnvelopeSignature

A DSSE signature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyid** | **str** | A reference id to the key being used for signing | [optional] 
**sig** | **bytearray** | The signature itself | [optional] 

## Example

```python
from openapi_client.models.envelope_signature import EnvelopeSignature

# TODO update the JSON string below
json = "{}"
# create an instance of EnvelopeSignature from a JSON string
envelope_signature_instance = EnvelopeSignature.from_json(json)
# print the JSON string representation of the object
print(EnvelopeSignature.to_json())

# convert the object into a dict
envelope_signature_dict = envelope_signature_instance.to_dict()
# create an instance of EnvelopeSignature from a dict
envelope_signature_from_dict = EnvelopeSignature.from_dict(envelope_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


