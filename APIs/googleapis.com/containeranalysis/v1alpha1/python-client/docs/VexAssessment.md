# VexAssessment

VexAssessment provides all publisher provided Vex information that is related to this vulnerability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cve** | **str** | Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. | [optional] 
**impacts** | **List[str]** | Contains information about the impact of this vulnerability, this will change with time. | [optional] 
**justification** | [**Justification**](Justification.md) |  | [optional] 
**note_name** | **str** | The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: &#x60;projects/[PROJECT_ID]/notes/[NOTE_ID]&#x60;. | [optional] 
**related_uris** | **List[str]** | Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability. | [optional] 
**remediations** | [**List[Remediation]**](Remediation.md) | Specifies details on how to handle (and presumably, fix) a vulnerability. | [optional] 
**state** | **str** | Provides the state of this Vulnerability assessment. | [optional] 
**vulnerability_id** | **str** | The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. | [optional] 

## Example

```python
from openapi_client.models.vex_assessment import VexAssessment

# TODO update the JSON string below
json = "{}"
# create an instance of VexAssessment from a JSON string
vex_assessment_instance = VexAssessment.from_json(json)
# print the JSON string representation of the object
print(VexAssessment.to_json())

# convert the object into a dict
vex_assessment_dict = vex_assessment_instance.to_dict()
# create an instance of VexAssessment from a dict
vex_assessment_from_dict = VexAssessment.from_dict(vex_assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


