# SubAssessmentStatus

Status of the sub-assessment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | **str** | Programmatic code for the cause of the assessment status | [optional] [readonly] 
**code** | **str** | Programmatic code for the status of the assessment | [optional] [readonly] 
**description** | **str** | Human readable description of the assessment status | [optional] [readonly] 
**severity** | **str** | The sub-assessment severity level | [optional] [readonly] 

## Example

```python
from openapi_client.models.sub_assessment_status import SubAssessmentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SubAssessmentStatus from a JSON string
sub_assessment_status_instance = SubAssessmentStatus.from_json(json)
# print the JSON string representation of the object
print(SubAssessmentStatus.to_json())

# convert the object into a dict
sub_assessment_status_dict = sub_assessment_status_instance.to_dict()
# create an instance of SubAssessmentStatus from a dict
sub_assessment_status_from_dict = SubAssessmentStatus.from_dict(sub_assessment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


