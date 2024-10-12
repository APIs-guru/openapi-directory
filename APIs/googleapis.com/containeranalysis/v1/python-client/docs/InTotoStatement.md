# InTotoStatement

Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always \"application/vnd.in-toto+json\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Always &#x60;https://in-toto.io/Statement/v0.1&#x60;. | [optional] 
**predicate_type** | **str** | &#x60;https://slsa.dev/provenance/v0.1&#x60; for SlsaProvenance. | [optional] 
**provenance** | [**InTotoProvenance**](InTotoProvenance.md) |  | [optional] 
**slsa_provenance** | [**SlsaProvenance**](SlsaProvenance.md) |  | [optional] 
**slsa_provenance_zero_two** | [**SlsaProvenanceZeroTwo**](SlsaProvenanceZeroTwo.md) |  | [optional] 
**subject** | [**List[Subject]**](Subject.md) |  | [optional] 

## Example

```python
from openapi_client.models.in_toto_statement import InTotoStatement

# TODO update the JSON string below
json = "{}"
# create an instance of InTotoStatement from a JSON string
in_toto_statement_instance = InTotoStatement.from_json(json)
# print the JSON string representation of the object
print(InTotoStatement.to_json())

# convert the object into a dict
in_toto_statement_dict = in_toto_statement_instance.to_dict()
# create an instance of InTotoStatement from a dict
in_toto_statement_from_dict = InTotoStatement.from_dict(in_toto_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


