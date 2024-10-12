# Occurrence

An instance of an analysis type that has been found on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation** | [**Details**](Details.md) |  | [optional] 
**build** | [**GrafeasV1beta1BuildDetails**](GrafeasV1beta1BuildDetails.md) |  | [optional] 
**create_time** | **str** | Output only. The time this occurrence was created. | [optional] 
**deployment** | [**GrafeasV1beta1DeploymentDetails**](GrafeasV1beta1DeploymentDetails.md) |  | [optional] 
**derived_image** | [**GrafeasV1beta1ImageDetails**](GrafeasV1beta1ImageDetails.md) |  | [optional] 
**discovered** | [**GrafeasV1beta1DiscoveryDetails**](GrafeasV1beta1DiscoveryDetails.md) |  | [optional] 
**envelope** | [**Envelope**](Envelope.md) |  | [optional] 
**installation** | [**GrafeasV1beta1PackageDetails**](GrafeasV1beta1PackageDetails.md) |  | [optional] 
**intoto** | [**GrafeasV1beta1IntotoDetails**](GrafeasV1beta1IntotoDetails.md) |  | [optional] 
**kind** | **str** | Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. | [optional] 
**name** | **str** | Output only. The name of the occurrence in the form of &#x60;projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]&#x60;. | [optional] 
**note_name** | **str** | Required. Immutable. The analysis note associated with this occurrence, in the form of &#x60;projects/[PROVIDER_ID]/notes/[NOTE_ID]&#x60;. This field can be used as a filter in list requests. | [optional] 
**remediation** | **str** | A description of actions that can be taken to remedy the note. | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 
**sbom** | [**DocumentOccurrence**](DocumentOccurrence.md) |  | [optional] 
**sbom_reference** | [**SBOMReferenceOccurrence**](SBOMReferenceOccurrence.md) |  | [optional] 
**spdx_file** | [**FileOccurrence**](FileOccurrence.md) |  | [optional] 
**spdx_package** | [**PackageInfoOccurrence**](PackageInfoOccurrence.md) |  | [optional] 
**spdx_relationship** | [**RelationshipOccurrence**](RelationshipOccurrence.md) |  | [optional] 
**update_time** | **str** | Output only. The time this occurrence was last updated. | [optional] 
**vulnerability** | [**GrafeasV1beta1VulnerabilityDetails**](GrafeasV1beta1VulnerabilityDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.occurrence import Occurrence

# TODO update the JSON string below
json = "{}"
# create an instance of Occurrence from a JSON string
occurrence_instance = Occurrence.from_json(json)
# print the JSON string representation of the object
print(Occurrence.to_json())

# convert the object into a dict
occurrence_dict = occurrence_instance.to_dict()
# create an instance of Occurrence from a dict
occurrence_from_dict = Occurrence.from_dict(occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


