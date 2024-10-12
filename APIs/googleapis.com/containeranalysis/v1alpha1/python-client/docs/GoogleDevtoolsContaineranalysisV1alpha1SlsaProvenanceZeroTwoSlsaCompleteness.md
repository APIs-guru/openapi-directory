# GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness

Indicates that the builder claims certain fields in this message to be complete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **bool** | If true, the builder claims that invocation.environment is complete. | [optional] 
**materials** | **bool** | If true, the builder claims that materials is complete. | [optional] 
**parameters** | **bool** | If true, the builder claims that invocation.parameters is complete. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_completeness import GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness from a JSON string
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_completeness_instance = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_completeness_dict = google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_completeness_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness from a dict
google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_completeness_from_dict = GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness.from_dict(google_devtools_containeranalysis_v1alpha1_slsa_provenance_zero_two_slsa_completeness_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


