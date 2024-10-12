# GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial

The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **Dict[str, str]** | Collection of cryptographic digests for the contents of this artifact. | [optional] 
**uri** | **str** | The method by which this artifact was referenced during the build. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_material import GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial from a JSON string
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_material_instance = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_material_dict = google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_material_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial from a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_material_from_dict = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial.from_dict(google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_material_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


