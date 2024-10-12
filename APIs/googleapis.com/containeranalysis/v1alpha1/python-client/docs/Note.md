# Note

Provides a detailed description of a `Note`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation_authority** | [**AttestationAuthority**](AttestationAuthority.md) |  | [optional] 
**base_image** | [**Basis**](Basis.md) |  | [optional] 
**build_type** | [**BuildType**](BuildType.md) |  | [optional] 
**compliance** | [**ComplianceNote**](ComplianceNote.md) |  | [optional] 
**create_time** | **str** | Output only. The time this note was created. This field can be used as a filter in list requests. | [optional] 
**deployable** | [**Deployable**](Deployable.md) |  | [optional] 
**discovery** | [**Discovery**](Discovery.md) |  | [optional] 
**dsse_attestation** | [**DSSEAttestationNote**](DSSEAttestationNote.md) |  | [optional] 
**expiration_time** | **str** | Time of expiration for this note, null if note does not expire. | [optional] 
**kind** | **str** | Output only. This explicitly denotes which kind of note is specified. This field can be used as a filter in list requests. | [optional] 
**long_description** | **str** | A detailed description of this &#x60;Note&#x60;. | [optional] 
**name** | **str** | The name of the note in the form \&quot;projects/{provider_project_id}/notes/{NOTE_ID}\&quot; | [optional] 
**package** | [**Package**](Package.md) |  | [optional] 
**related_url** | [**List[RelatedUrl]**](RelatedUrl.md) | URLs associated with this note | [optional] 
**sbom** | [**DocumentNote**](DocumentNote.md) |  | [optional] 
**sbom_reference** | [**SBOMReferenceNote**](SBOMReferenceNote.md) |  | [optional] 
**short_description** | **str** | A one sentence description of this &#x60;Note&#x60;. | [optional] 
**spdx_file** | [**FileNote**](FileNote.md) |  | [optional] 
**spdx_package** | [**PackageInfoNote**](PackageInfoNote.md) |  | [optional] 
**spdx_relationship** | [**RelationshipNote**](RelationshipNote.md) |  | [optional] 
**update_time** | **str** | Output only. The time this note was last updated. This field can be used as a filter in list requests. | [optional] 
**upgrade** | [**UpgradeNote**](UpgradeNote.md) |  | [optional] 
**vulnerability_assessment** | [**VulnerabilityAssessmentNote**](VulnerabilityAssessmentNote.md) |  | [optional] 
**vulnerability_type** | [**VulnerabilityType**](VulnerabilityType.md) |  | [optional] 

## Example

```python
from openapi_client.models.note import Note

# TODO update the JSON string below
json = "{}"
# create an instance of Note from a JSON string
note_instance = Note.from_json(json)
# print the JSON string representation of the object
print(Note.to_json())

# convert the object into a dict
note_dict = note_instance.to_dict()
# create an instance of Note from a dict
note_from_dict = Note.from_dict(note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


