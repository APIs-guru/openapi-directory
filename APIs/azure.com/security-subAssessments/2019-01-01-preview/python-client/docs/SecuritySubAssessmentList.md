# SecuritySubAssessmentList

List of security sub-assessments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[SecuritySubAssessment]**](SecuritySubAssessment.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_sub_assessment_list import SecuritySubAssessmentList

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySubAssessmentList from a JSON string
security_sub_assessment_list_instance = SecuritySubAssessmentList.from_json(json)
# print the JSON string representation of the object
print(SecuritySubAssessmentList.to_json())

# convert the object into a dict
security_sub_assessment_list_dict = security_sub_assessment_list_instance.to_dict()
# create an instance of SecuritySubAssessmentList from a dict
security_sub_assessment_list_from_dict = SecuritySubAssessmentList.from_dict(security_sub_assessment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


