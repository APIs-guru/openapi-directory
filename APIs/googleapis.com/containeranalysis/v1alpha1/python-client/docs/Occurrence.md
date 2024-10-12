# Occurrence

`Occurrence` includes information about analysis occurrences for an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation** | [**Attestation**](Attestation.md) |  | [optional] 
**build_details** | [**BuildDetails**](BuildDetails.md) |  | [optional] 
**compliance** | [**ComplianceOccurrence**](ComplianceOccurrence.md) |  | [optional] 
**create_time** | **str** | Output only. The time this &#x60;Occurrence&#x60; was created. | [optional] 
**deployment** | [**Deployment**](Deployment.md) |  | [optional] 
**derived_image** | [**Derived**](Derived.md) |  | [optional] 
**discovered** | [**Discovered**](Discovered.md) |  | [optional] 
**dsse_attestation** | [**DSSEAttestationOccurrence**](DSSEAttestationOccurrence.md) |  | [optional] 
**envelope** | [**Envelope**](Envelope.md) |  | [optional] 
**installation** | [**Installation**](Installation.md) |  | [optional] 
**kind** | **str** | Output only. This explicitly denotes which of the &#x60;Occurrence&#x60; details are specified. This field can be used as a filter in list requests. | [optional] 
**name** | **str** | Output only. The name of the &#x60;Occurrence&#x60; in the form \&quot;projects/{project_id}/occurrences/{OCCURRENCE_ID}\&quot; | [optional] 
**note_name** | **str** | An analysis note associated with this image, in the form \&quot;providers/{provider_id}/notes/{NOTE_ID}\&quot; This field can be used as a filter in list requests. | [optional] 
**remediation** | **str** | A description of actions that can be taken to remedy the &#x60;Note&#x60; | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 
**resource_url** | **str** | The unique URL of the image or the container for which the &#x60;Occurrence&#x60; applies. For example, https://gcr.io/project/image@sha256:foo This field can be used as a filter in list requests. | [optional] 
**sbom** | [**DocumentOccurrence**](DocumentOccurrence.md) |  | [optional] 
**sbom_reference** | [**SBOMReferenceOccurrence**](SBOMReferenceOccurrence.md) |  | [optional] 
**spdx_file** | [**FileOccurrence**](FileOccurrence.md) |  | [optional] 
**spdx_package** | [**PackageInfoOccurrence**](PackageInfoOccurrence.md) |  | [optional] 
**spdx_relationship** | [**RelationshipOccurrence**](RelationshipOccurrence.md) |  | [optional] 
**update_time** | **str** | Output only. The time this &#x60;Occurrence&#x60; was last updated. | [optional] 
**upgrade** | [**UpgradeOccurrence**](UpgradeOccurrence.md) |  | [optional] 
**vulnerability_details** | [**VulnerabilityDetails**](VulnerabilityDetails.md) |  | [optional] 

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


