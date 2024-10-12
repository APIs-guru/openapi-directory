# StudentSubmission

Student submission for course work. `StudentSubmission` items are generated when a `CourseWork` item is created. Student submissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to the submission in the Classroom web UI. Read-only. | [optional] 
**assigned_grade** | **float** | Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers. | [optional] 
**assignment_submission** | [**AssignmentSubmission**](AssignmentSubmission.md) |  | [optional] 
**associated_with_developer** | **bool** | Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only. | [optional] 
**course_id** | **str** | Identifier of the course. Read-only. | [optional] 
**course_work_id** | **str** | Identifier for the course work this corresponds to. Read-only. | [optional] 
**course_work_type** | **str** | Type of course work this submission is for. Read-only. | [optional] 
**creation_time** | **str** | Creation time of this submission. This may be unset if the student has not accessed this item. Read-only. | [optional] 
**draft_grade** | **float** | Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers. | [optional] 
**id** | **str** | Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only. | [optional] 
**late** | **bool** | Whether this submission is late. Read-only. | [optional] 
**multiple_choice_submission** | [**MultipleChoiceSubmission**](MultipleChoiceSubmission.md) |  | [optional] 
**short_answer_submission** | [**ShortAnswerSubmission**](ShortAnswerSubmission.md) |  | [optional] 
**state** | **str** | State of this submission. Read-only. | [optional] 
**submission_history** | [**List[SubmissionHistory]**](SubmissionHistory.md) | The history of the submission (includes state and grade histories). Read-only. | [optional] 
**update_time** | **str** | Last update time of this submission. This may be unset if the student has not accessed this item. Read-only. | [optional] 
**user_id** | **str** | Identifier for the student that owns this submission. Read-only. | [optional] 

## Example

```python
from openapi_client.models.student_submission import StudentSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of StudentSubmission from a JSON string
student_submission_instance = StudentSubmission.from_json(json)
# print the JSON string representation of the object
print(StudentSubmission.to_json())

# convert the object into a dict
student_submission_dict = student_submission_instance.to_dict()
# create an instance of StudentSubmission from a dict
student_submission_from_dict = StudentSubmission.from_dict(student_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


