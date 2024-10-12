# SecurityAssessmentProperties

Describes properties of an assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_data** | **Dict[str, str]** | Additional data regarding the assessment | [optional] 
**display_name** | **str** | User friendly display name of the assessment | [optional] [readonly] 
**links** | [**AssessmentLinks**](AssessmentLinks.md) |  | [optional] 
**resource_details** | [**SecurityAssessmentPropertiesResourceDetails**](SecurityAssessmentPropertiesResourceDetails.md) |  | 
**status** | [**AssessmentStatus**](AssessmentStatus.md) |  | 

## Example

```python
from openapi_client.models.security_assessment_properties import SecurityAssessmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAssessmentProperties from a JSON string
security_assessment_properties_instance = SecurityAssessmentProperties.from_json(json)
# print the JSON string representation of the object
print(SecurityAssessmentProperties.to_json())

# convert the object into a dict
security_assessment_properties_dict = security_assessment_properties_instance.to_dict()
# create an instance of SecurityAssessmentProperties from a dict
security_assessment_properties_from_dict = SecurityAssessmentProperties.from_dict(security_assessment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


