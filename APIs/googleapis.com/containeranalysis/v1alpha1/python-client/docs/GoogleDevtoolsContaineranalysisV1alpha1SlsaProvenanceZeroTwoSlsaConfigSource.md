# GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource

Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **Dict[str, str]** | Collection of cryptographic digests for the contents of the artifact specified by invocation.configSource.uri. | [optional] 
**entry_point** | **str** | String identifying the entry point into the build. | [optional] 
**uri** | **str** | URI indicating the identity of the source of the config. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_config_source import GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource from a JSON string
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_config_source_instance = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_config_source_dict = google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_config_source_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource from a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_config_source_from_dict = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource.from_dict(google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_config_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


