# GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation

Identifies the event that kicked off the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_source** | [**GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource**](GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource.md) |  | [optional] 
**environment** | **Dict[str, object]** | Any other builder-controlled inputs necessary for correctly evaluating the build. | [optional] 
**parameters** | **Dict[str, object]** | Collection of all external inputs that influenced the build on top of invocation.configSource. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_invocation import GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation from a JSON string
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_invocation_instance = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_invocation_dict = google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_invocation_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation from a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_invocation_from_dict = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation.from_dict(google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_invocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


