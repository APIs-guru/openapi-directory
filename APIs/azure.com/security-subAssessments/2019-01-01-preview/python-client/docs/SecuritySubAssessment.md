# SecuritySubAssessment

Security sub-assessment on a resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecuritySubAssessmentProperties**](SecuritySubAssessmentProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_sub_assessment import SecuritySubAssessment

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySubAssessment from a JSON string
security_sub_assessment_instance = SecuritySubAssessment.from_json(json)
# print the JSON string representation of the object
print(SecuritySubAssessment.to_json())

# convert the object into a dict
security_sub_assessment_dict = security_sub_assessment_instance.to_dict()
# create an instance of SecuritySubAssessment from a dict
security_sub_assessment_from_dict = SecuritySubAssessment.from_dict(security_sub_assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


