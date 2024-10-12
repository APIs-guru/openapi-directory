# SecurityAssessment

Security assessment on a resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecurityAssessmentProperties**](SecurityAssessmentProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_assessment import SecurityAssessment

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAssessment from a JSON string
security_assessment_instance = SecurityAssessment.from_json(json)
# print the JSON string representation of the object
print(SecurityAssessment.to_json())

# convert the object into a dict
security_assessment_dict = security_assessment_instance.to_dict()
# create an instance of SecurityAssessment from a dict
security_assessment_from_dict = SecurityAssessment.from_dict(security_assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


