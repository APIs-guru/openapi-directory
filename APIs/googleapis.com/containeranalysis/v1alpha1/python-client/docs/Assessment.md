# Assessment

Assessment provides all information that is related to a single vulnerability for this product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cve** | **str** | Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. | [optional] 
**impacts** | **List[str]** | Contains information about the impact of this vulnerability, this will change with time. | [optional] 
**justification** | [**Justification**](Justification.md) |  | [optional] 
**long_description** | **str** | A detailed description of this Vex. | [optional] 
**related_uris** | **List[str]** | Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability. | [optional] 
**remediations** | [**List[Remediation]**](Remediation.md) | Specifies details on how to handle (and presumably, fix) a vulnerability. | [optional] 
**short_description** | **str** | A one sentence description of this Vex. | [optional] 
**state** | **str** | Provides the state of this Vulnerability assessment. | [optional] 
**vulnerability_id** | **str** | The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. | [optional] 

## Example

```python
from openapi_client.models.assessment import Assessment

# TODO update the JSON string below
json = "{}"
# create an instance of Assessment from a JSON string
assessment_instance = Assessment.from_json(json)
# print the JSON string representation of the object
print(Assessment.to_json())

# convert the object into a dict
assessment_dict = assessment_instance.to_dict()
# create an instance of Assessment from a dict
assessment_from_dict = Assessment.from_dict(assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


