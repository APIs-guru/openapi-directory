# AssessmentPendingSubmission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**documents** | [**List[Document]**](Document.md) |  | [optional] 
**due_date** | **datetime** |  | [optional] 
**duration_minutes** | **int** |  | [optional] 
**filename** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] [default to False]
**id** | **str** |  | [optional] 
**mark_number** | **str** |  | [optional] 
**mark_type** | **str** |  | [optional] 
**max_attempts** | **int** |  | [optional] 
**offering_id** | **str** |  | [optional] 
**offering_name** | **str** |  | [optional] 
**open_date** | **datetime** |  | [optional] 
**pid** | **str** |  | [optional] 
**points** | **str** |  | [optional] 
**themes** | [**List[ThemeResponse]**](ThemeResponse.md) |  | [optional] 
**title** | **str** |  | [optional] 
**total_questions** | **int** |  | [optional] 
**total_themes** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**users** | [**List[User]**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.assessment_pending_submission import AssessmentPendingSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentPendingSubmission from a JSON string
assessment_pending_submission_instance = AssessmentPendingSubmission.from_json(json)
# print the JSON string representation of the object
print(AssessmentPendingSubmission.to_json())

# convert the object into a dict
assessment_pending_submission_dict = assessment_pending_submission_instance.to_dict()
# create an instance of AssessmentPendingSubmission from a dict
assessment_pending_submission_from_dict = AssessmentPendingSubmission.from_dict(assessment_pending_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


