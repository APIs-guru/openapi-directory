# RegulatoryComplianceAssessmentList

List of regulatory compliance assessment response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[RegulatoryComplianceAssessment]**](RegulatoryComplianceAssessment.md) |  | 

## Example

```python
from openapi_client.models.regulatory_compliance_assessment_list import RegulatoryComplianceAssessmentList

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceAssessmentList from a JSON string
regulatory_compliance_assessment_list_instance = RegulatoryComplianceAssessmentList.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceAssessmentList.to_json())

# convert the object into a dict
regulatory_compliance_assessment_list_dict = regulatory_compliance_assessment_list_instance.to_dict()
# create an instance of RegulatoryComplianceAssessmentList from a dict
regulatory_compliance_assessment_list_from_dict = RegulatoryComplianceAssessmentList.from_dict(regulatory_compliance_assessment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


