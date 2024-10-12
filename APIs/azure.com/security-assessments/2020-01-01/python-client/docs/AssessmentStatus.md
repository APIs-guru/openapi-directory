# AssessmentStatus

The result of the assessment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | **str** | Programmatic code for the cause of the assessment status | [optional] 
**code** | **str** | Programmatic code for the status of the assessment | 
**description** | **str** | Human readable description of the assessment status | [optional] 

## Example

```python
from openapi_client.models.assessment_status import AssessmentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentStatus from a JSON string
assessment_status_instance = AssessmentStatus.from_json(json)
# print the JSON string representation of the object
print(AssessmentStatus.to_json())

# convert the object into a dict
assessment_status_dict = assessment_status_instance.to_dict()
# create an instance of AssessmentStatus from a dict
assessment_status_from_dict = AssessmentStatus.from_dict(assessment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


