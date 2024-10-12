# SecurityAssessmentPropertiesMetadata

Describes properties of an assessment metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_type** | **str** | BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition | 
**category** | **List[str]** |  | [optional] 
**description** | **str** | Human readable description of the assessment | [optional] 
**display_name** | **str** | User friendly display name of the assessment | 
**implementation_effort** | **str** | The implementation effort required to remediate this assessment | [optional] 
**partner_data** | [**SecurityAssessmentPropertiesMetadataPartnerData**](SecurityAssessmentPropertiesMetadataPartnerData.md) |  | [optional] 
**policy_definition_id** | **str** | Azure resource ID of the policy definition that turns this assessment calculation on | [optional] [readonly] 
**preview** | **bool** | True if this assessment is in preview release status | [optional] 
**remediation_description** | **str** | Human readable description of what you should do to mitigate this security issue | [optional] 
**severity** | **str** | The severity level of the assessment | 
**threats** | **List[str]** |  | [optional] 
**user_impact** | **str** | The user impact of the assessment | [optional] 

## Example

```python
from openapi_client.models.security_assessment_properties_metadata import SecurityAssessmentPropertiesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAssessmentPropertiesMetadata from a JSON string
security_assessment_properties_metadata_instance = SecurityAssessmentPropertiesMetadata.from_json(json)
# print the JSON string representation of the object
print(SecurityAssessmentPropertiesMetadata.to_json())

# convert the object into a dict
security_assessment_properties_metadata_dict = security_assessment_properties_metadata_instance.to_dict()
# create an instance of SecurityAssessmentPropertiesMetadata from a dict
security_assessment_properties_metadata_from_dict = SecurityAssessmentPropertiesMetadata.from_dict(security_assessment_properties_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


