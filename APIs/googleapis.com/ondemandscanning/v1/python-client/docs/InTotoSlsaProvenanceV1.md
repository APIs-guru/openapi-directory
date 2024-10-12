# InTotoSlsaProvenanceV1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | InToto spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement | [optional] 
**predicate** | [**SlsaProvenanceV1**](SlsaProvenanceV1.md) |  | [optional] 
**predicate_type** | **str** |  | [optional] 
**subject** | [**List[Subject]**](Subject.md) |  | [optional] 

## Example

```python
from openapi_client.models.in_toto_slsa_provenance_v1 import InTotoSlsaProvenanceV1

# TODO update the JSON string below
json = "{}"
# create an instance of InTotoSlsaProvenanceV1 from a JSON string
in_toto_slsa_provenance_v1_instance = InTotoSlsaProvenanceV1.from_json(json)
# print the JSON string representation of the object
print(InTotoSlsaProvenanceV1.to_json())

# convert the object into a dict
in_toto_slsa_provenance_v1_dict = in_toto_slsa_provenance_v1_instance.to_dict()
# create an instance of InTotoSlsaProvenanceV1 from a dict
in_toto_slsa_provenance_v1_from_dict = InTotoSlsaProvenanceV1.from_dict(in_toto_slsa_provenance_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


