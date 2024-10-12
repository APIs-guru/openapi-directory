# SecurityAssessmentList

Page of a security assessments list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[SecurityAssessment]**](SecurityAssessment.md) | Collection of security assessments in this page | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_assessment_list import SecurityAssessmentList

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAssessmentList from a JSON string
security_assessment_list_instance = SecurityAssessmentList.from_json(json)
# print the JSON string representation of the object
print(SecurityAssessmentList.to_json())

# convert the object into a dict
security_assessment_list_dict = security_assessment_list_instance.to_dict()
# create an instance of SecurityAssessmentList from a dict
security_assessment_list_from_dict = SecurityAssessmentList.from_dict(security_assessment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


