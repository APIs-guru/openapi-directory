# SecuritySubAssessmentPropertiesResourceDetails

Details of the resource that was assessed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | The platform where the assessed resource resides | 

## Example

```python
from openapi_client.models.security_sub_assessment_properties_resource_details import SecuritySubAssessmentPropertiesResourceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySubAssessmentPropertiesResourceDetails from a JSON string
security_sub_assessment_properties_resource_details_instance = SecuritySubAssessmentPropertiesResourceDetails.from_json(json)
# print the JSON string representation of the object
print(SecuritySubAssessmentPropertiesResourceDetails.to_json())

# convert the object into a dict
security_sub_assessment_properties_resource_details_dict = security_sub_assessment_properties_resource_details_instance.to_dict()
# create an instance of SecuritySubAssessmentPropertiesResourceDetails from a dict
security_sub_assessment_properties_resource_details_from_dict = SecuritySubAssessmentPropertiesResourceDetails.from_dict(security_sub_assessment_properties_resource_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


