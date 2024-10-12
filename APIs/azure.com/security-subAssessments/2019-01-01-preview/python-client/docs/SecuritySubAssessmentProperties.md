# SecuritySubAssessmentProperties

Describes properties of an sub-assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_data** | [**AdditionalData**](AdditionalData.md) |  | [optional] 
**category** | **str** | Category of the sub-assessment | [optional] [readonly] 
**description** | **str** | Human readable description of the assessment status | [optional] [readonly] 
**display_name** | **str** | User friendly display name of the sub-assessment | [optional] [readonly] 
**id** | **str** | Vulnerability ID | [optional] [readonly] 
**impact** | **str** | Description of the impact of this sub-assessment | [optional] [readonly] 
**remediation** | **str** | Information on how to remediate this sub-assessment | [optional] [readonly] 
**resource_details** | [**SecuritySubAssessmentPropertiesResourceDetails**](SecuritySubAssessmentPropertiesResourceDetails.md) |  | [optional] 
**status** | [**SubAssessmentStatus**](SubAssessmentStatus.md) |  | [optional] 
**time_generated** | **datetime** | The date and time the sub-assessment was generated | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_sub_assessment_properties import SecuritySubAssessmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySubAssessmentProperties from a JSON string
security_sub_assessment_properties_instance = SecuritySubAssessmentProperties.from_json(json)
# print the JSON string representation of the object
print(SecuritySubAssessmentProperties.to_json())

# convert the object into a dict
security_sub_assessment_properties_dict = security_sub_assessment_properties_instance.to_dict()
# create an instance of SecuritySubAssessmentProperties from a dict
security_sub_assessment_properties_from_dict = SecuritySubAssessmentProperties.from_dict(security_sub_assessment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


