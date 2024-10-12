# GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata

Other properties of the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_finished_on** | **str** |  | [optional] 
**build_invocation_id** | **str** |  | [optional] 
**build_started_on** | **str** |  | [optional] 
**completeness** | [**GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness**](GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness.md) |  | [optional] 
**reproducible** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1_slsa_provenance_zero_two_slsa_metadata import GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata from a JSON string
grafeas_v1_slsa_provenance_zero_two_slsa_metadata_instance = GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata.to_json())

# convert the object into a dict
grafeas_v1_slsa_provenance_zero_two_slsa_metadata_dict = grafeas_v1_slsa_provenance_zero_two_slsa_metadata_instance.to_dict()
# create an instance of GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata from a dict
grafeas_v1_slsa_provenance_zero_two_slsa_metadata_from_dict = GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata.from_dict(grafeas_v1_slsa_provenance_zero_two_slsa_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


