# GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource

Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **Dict[str, str]** |  | [optional] 
**entry_point** | **str** |  | [optional] 
**uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1_slsa_provenance_zero_two_slsa_config_source import GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource from a JSON string
grafeas_v1_slsa_provenance_zero_two_slsa_config_source_instance = GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource.to_json())

# convert the object into a dict
grafeas_v1_slsa_provenance_zero_two_slsa_config_source_dict = grafeas_v1_slsa_provenance_zero_two_slsa_config_source_instance.to_dict()
# create an instance of GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource from a dict
grafeas_v1_slsa_provenance_zero_two_slsa_config_source_from_dict = GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource.from_dict(grafeas_v1_slsa_provenance_zero_two_slsa_config_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


