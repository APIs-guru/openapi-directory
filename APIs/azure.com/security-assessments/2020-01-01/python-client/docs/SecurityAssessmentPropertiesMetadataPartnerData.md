# SecurityAssessmentPropertiesMetadataPartnerData

Describes the partner that created the assessment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_name** | **str** | Name of the company of the partner | [optional] [readonly] 
**product_name** | **str** | Name of the product of the partner that created the assessment | [optional] 
**secret** | **str** | Secret to authenticate the partner and verify it created the assessment - write only | [optional] 

## Example

```python
from openapi_client.models.security_assessment_properties_metadata_partner_data import SecurityAssessmentPropertiesMetadataPartnerData

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAssessmentPropertiesMetadataPartnerData from a JSON string
security_assessment_properties_metadata_partner_data_instance = SecurityAssessmentPropertiesMetadataPartnerData.from_json(json)
# print the JSON string representation of the object
print(SecurityAssessmentPropertiesMetadataPartnerData.to_json())

# convert the object into a dict
security_assessment_properties_metadata_partner_data_dict = security_assessment_properties_metadata_partner_data_instance.to_dict()
# create an instance of SecurityAssessmentPropertiesMetadataPartnerData from a dict
security_assessment_properties_metadata_partner_data_from_dict = SecurityAssessmentPropertiesMetadataPartnerData.from_dict(security_assessment_properties_metadata_partner_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


