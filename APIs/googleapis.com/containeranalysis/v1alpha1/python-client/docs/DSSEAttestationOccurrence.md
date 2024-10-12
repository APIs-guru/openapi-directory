# DSSEAttestationOccurrence

An occurrence describing an attestation on a resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envelope** | [**Envelope**](Envelope.md) |  | [optional] 
**statement** | [**InTotoStatement**](InTotoStatement.md) |  | [optional] 

## Example

```python
from openapi_client.models.dsse_attestation_occurrence import DSSEAttestationOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of DSSEAttestationOccurrence from a JSON string
dsse_attestation_occurrence_instance = DSSEAttestationOccurrence.from_json(json)
# print the JSON string representation of the object
print(DSSEAttestationOccurrence.to_json())

# convert the object into a dict
dsse_attestation_occurrence_dict = dsse_attestation_occurrence_instance.to_dict()
# create an instance of DSSEAttestationOccurrence from a dict
dsse_attestation_occurrence_from_dict = DSSEAttestationOccurrence.from_dict(dsse_attestation_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


