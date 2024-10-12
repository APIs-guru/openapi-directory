# SlsaProvenanceZeroTwo

SlsaProvenanceZeroTwo is the slsa provenance as defined by the slsa spec. See full explanation of fields at slsa.dev/provenance/v0.2.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_config** | **Dict[str, object]** | Lists the steps in the build. | [optional] 
**build_type** | **str** | URI indicating what type of build was performed. | [optional] 
**builder** | [**GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder**](GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder.md) |  | [optional] 
**invocation** | [**GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation**](GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation.md) |  | [optional] 
**materials** | [**List[GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial]**](GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial.md) | The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. | [optional] 
**metadata** | [**GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata**](GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.slsa_provenance_zero_two import SlsaProvenanceZeroTwo

# TODO update the JSON string below
json = "{}"
# create an instance of SlsaProvenanceZeroTwo from a JSON string
slsa_provenance_zero_two_instance = SlsaProvenanceZeroTwo.from_json(json)
# print the JSON string representation of the object
print(SlsaProvenanceZeroTwo.to_json())

# convert the object into a dict
slsa_provenance_zero_two_dict = slsa_provenance_zero_two_instance.to_dict()
# create an instance of SlsaProvenanceZeroTwo from a dict
slsa_provenance_zero_two_from_dict = SlsaProvenanceZeroTwo.from_dict(slsa_provenance_zero_two_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


