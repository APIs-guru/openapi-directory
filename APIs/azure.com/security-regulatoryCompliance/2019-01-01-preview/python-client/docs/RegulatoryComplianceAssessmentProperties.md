# RegulatoryComplianceAssessmentProperties

Regulatory compliance assessment data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_details_link** | **str** | Link to more detailed assessment results data. The response type will be according to the assessmentType field | [optional] [readonly] 
**assessment_type** | **str** | The expected type of assessment contained in the AssessmentDetailsLink | [optional] [readonly] 
**description** | **str** | The description of the regulatory compliance assessment | [optional] [readonly] 
**failed_resources** | **int** | The given assessment&#39;s related resources count with failed state. | [optional] [readonly] 
**passed_resources** | **int** | The given assessment&#39;s related resources count with passed state. | [optional] [readonly] 
**skipped_resources** | **int** | The given assessment&#39;s related resources count with skipped state. | [optional] [readonly] 
**state** | **str** | Aggregative state based on the assessment&#39;s scanned resources states | [optional] 
**unsupported_resources** | **int** | The given assessment&#39;s related resources count with unsupported state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.regulatory_compliance_assessment_properties import RegulatoryComplianceAssessmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceAssessmentProperties from a JSON string
regulatory_compliance_assessment_properties_instance = RegulatoryComplianceAssessmentProperties.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceAssessmentProperties.to_json())

# convert the object into a dict
regulatory_compliance_assessment_properties_dict = regulatory_compliance_assessment_properties_instance.to_dict()
# create an instance of RegulatoryComplianceAssessmentProperties from a dict
regulatory_compliance_assessment_properties_from_dict = RegulatoryComplianceAssessmentProperties.from_dict(regulatory_compliance_assessment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


