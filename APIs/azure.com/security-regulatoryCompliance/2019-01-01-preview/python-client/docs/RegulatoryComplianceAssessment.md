# RegulatoryComplianceAssessment

Regulatory compliance assessment details and state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RegulatoryComplianceAssessmentProperties**](RegulatoryComplianceAssessmentProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.regulatory_compliance_assessment import RegulatoryComplianceAssessment

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceAssessment from a JSON string
regulatory_compliance_assessment_instance = RegulatoryComplianceAssessment.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceAssessment.to_json())

# convert the object into a dict
regulatory_compliance_assessment_dict = regulatory_compliance_assessment_instance.to_dict()
# create an instance of RegulatoryComplianceAssessment from a dict
regulatory_compliance_assessment_from_dict = RegulatoryComplianceAssessment.from_dict(regulatory_compliance_assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


