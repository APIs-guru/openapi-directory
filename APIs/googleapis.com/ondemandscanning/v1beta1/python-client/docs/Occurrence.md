# Occurrence

An instance of an analysis type that has been found on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation** | [**AttestationOccurrence**](AttestationOccurrence.md) |  | [optional] 
**build** | [**BuildOccurrence**](BuildOccurrence.md) |  | [optional] 
**compliance** | [**ComplianceOccurrence**](ComplianceOccurrence.md) |  | [optional] 
**create_time** | **str** | Output only. The time this occurrence was created. | [optional] 
**deployment** | [**DeploymentOccurrence**](DeploymentOccurrence.md) |  | [optional] 
**discovery** | [**DiscoveryOccurrence**](DiscoveryOccurrence.md) |  | [optional] 
**dsse_attestation** | [**DSSEAttestationOccurrence**](DSSEAttestationOccurrence.md) |  | [optional] 
**envelope** | [**Envelope**](Envelope.md) |  | [optional] 
**image** | [**ImageOccurrence**](ImageOccurrence.md) |  | [optional] 
**kind** | **str** | Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. | [optional] 
**name** | **str** | Output only. The name of the occurrence in the form of &#x60;projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]&#x60;. | [optional] 
**note_name** | **str** | Required. Immutable. The analysis note associated with this occurrence, in the form of &#x60;projects/[PROVIDER_ID]/notes/[NOTE_ID]&#x60;. This field can be used as a filter in list requests. | [optional] 
**package** | [**PackageOccurrence**](PackageOccurrence.md) |  | [optional] 
**remediation** | **str** | A description of actions that can be taken to remedy the note. | [optional] 
**resource_uri** | **str** | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, &#x60;https://gcr.io/project/image@sha256:123abc&#x60; for a Docker image. | [optional] 
**sbom_reference** | [**SBOMReferenceOccurrence**](SBOMReferenceOccurrence.md) |  | [optional] 
**update_time** | **str** | Output only. The time this occurrence was last updated. | [optional] 
**upgrade** | [**UpgradeOccurrence**](UpgradeOccurrence.md) |  | [optional] 
**vulnerability** | [**VulnerabilityOccurrence**](VulnerabilityOccurrence.md) |  | [optional] 

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


