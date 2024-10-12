# Note

A type of analysis that can be done for a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation** | [**AttestationNote**](AttestationNote.md) |  | [optional] 
**build** | [**BuildNote**](BuildNote.md) |  | [optional] 
**compliance** | [**ComplianceNote**](ComplianceNote.md) |  | [optional] 
**create_time** | **str** | Output only. The time this note was created. This field can be used as a filter in list requests. | [optional] 
**deployment** | [**DeploymentNote**](DeploymentNote.md) |  | [optional] 
**discovery** | [**DiscoveryNote**](DiscoveryNote.md) |  | [optional] 
**dsse_attestation** | [**DSSEAttestationNote**](DSSEAttestationNote.md) |  | [optional] 
**expiration_time** | **str** | Time of expiration for this note. Empty if note does not expire. | [optional] 
**image** | [**ImageNote**](ImageNote.md) |  | [optional] 
**kind** | **str** | Output only. The type of analysis. This field can be used as a filter in list requests. | [optional] 
**long_description** | **str** | A detailed description of this note. | [optional] 
**name** | **str** | Output only. The name of the note in the form of &#x60;projects/[PROVIDER_ID]/notes/[NOTE_ID]&#x60;. | [optional] 
**package** | [**PackageNote**](PackageNote.md) |  | [optional] 
**related_note_names** | **List[str]** | Other notes related to this note. | [optional] 
**related_url** | [**List[RelatedUrl]**](RelatedUrl.md) | URLs associated with this note. | [optional] 
**sbom_reference** | [**SBOMReferenceNote**](SBOMReferenceNote.md) |  | [optional] 
**short_description** | **str** | A one sentence description of this note. | [optional] 
**update_time** | **str** | Output only. The time this note was last updated. This field can be used as a filter in list requests. | [optional] 
**upgrade** | [**UpgradeNote**](UpgradeNote.md) |  | [optional] 
**vulnerability** | [**VulnerabilityNote**](VulnerabilityNote.md) |  | [optional] 
**vulnerability_assessment** | [**VulnerabilityAssessmentNote**](VulnerabilityAssessmentNote.md) |  | [optional] 

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


