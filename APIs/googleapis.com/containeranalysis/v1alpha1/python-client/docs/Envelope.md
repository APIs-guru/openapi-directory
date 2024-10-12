# Envelope

MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **bytearray** | The bytes being signed | [optional] 
**payload_type** | **str** | The type of payload being signed | [optional] 
**signatures** | [**List[EnvelopeSignature]**](EnvelopeSignature.md) | The signatures over the payload | [optional] 

## Example

```python
from openapi_client.models.envelope import Envelope

# TODO update the JSON string below
json = "{}"
# create an instance of Envelope from a JSON string
envelope_instance = Envelope.from_json(json)
# print the JSON string representation of the object
print(Envelope.to_json())

# convert the object into a dict
envelope_dict = envelope_instance.to_dict()
# create an instance of Envelope from a dict
envelope_from_dict = Envelope.from_dict(envelope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


