# GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata

Other properties of the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_finished_on** | **str** | The timestamp of when the build completed. | [optional] 
**build_invocation_id** | **str** | Identifies this particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. | [optional] 
**build_started_on** | **str** | The timestamp of when the build started. | [optional] 
**completeness** | [**GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness**](GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness.md) |  | [optional] 
**reproducible** | **bool** | If true, the builder claims that running invocation on materials will produce bit-for-bit identical output. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_metadata import GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata from a JSON string
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_metadata_instance = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_metadata_dict = google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_metadata_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata from a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_metadata_from_dict = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata.from_dict(google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


