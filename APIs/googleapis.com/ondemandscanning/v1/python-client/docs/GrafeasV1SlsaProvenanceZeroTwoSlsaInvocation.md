# GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation

Identifies the event that kicked off the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_source** | [**GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource**](GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource.md) |  | [optional] 
**environment** | **Dict[str, object]** |  | [optional] 
**parameters** | **Dict[str, object]** |  | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1_slsa_provenance_zero_two_slsa_invocation import GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation from a JSON string
grafeas_v1_slsa_provenance_zero_two_slsa_invocation_instance = GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation.to_json())

# convert the object into a dict
grafeas_v1_slsa_provenance_zero_two_slsa_invocation_dict = grafeas_v1_slsa_provenance_zero_two_slsa_invocation_instance.to_dict()
# create an instance of GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation from a dict
grafeas_v1_slsa_provenance_zero_two_slsa_invocation_from_dict = GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation.from_dict(grafeas_v1_slsa_provenance_zero_two_slsa_invocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


