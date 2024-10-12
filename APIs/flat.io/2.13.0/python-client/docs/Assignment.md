# Assignment

Assignment details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[MediaAttachment]**](MediaAttachment.md) |  | [optional] 
**canvas** | [**AssignmentCanvas**](AssignmentCanvas.md) |  | [optional] 
**classroom** | **str** | The unique identifier of the class where this assignment was posted | [optional] 
**cover** | **str** | The URL of the cover to display | [optional] 
**cover_file** | **str** | The id of the cover to display | [optional] 
**creation_date** | **datetime** | The creation date of this assignment | [optional] 
**creator** | **str** | The User unique identifier of the creator of this assignment  | [optional] 
**description** | **str** | Description and content of the assignment | [optional] 
**due_date** | **datetime** | The due date of this assignment, late submissions will be marked as paste due.  | [optional] 
**google_classroom** | [**GoogleClassroomCoursework**](GoogleClassroomCoursework.md) |  | [optional] 
**lti** | [**AssignmentLti**](AssignmentLti.md) |  | [optional] 
**max_points** | **float** | If set, the grading will be enabled for the assignement  | [optional] 
**mfc** | [**AssignmentMfc**](AssignmentMfc.md) |  | [optional] 
**microsoft_graph** | [**MicrosoftGraphAssignment**](MicrosoftGraphAssignment.md) |  | [optional] 
**scheduled_date** | **datetime** | The publication (scheduled) date of the assignment. If this one is specified, the assignment will only be listed to the teachers of the class.  | [optional] 
**state** | **str** | State of the assignment | [optional] 
**submissions** | [**List[AssignmentSubmission]**](AssignmentSubmission.md) |  | [optional] 
**title** | **str** | Title of the assignment | [optional] 
**type** | [**AssignmentType**](AssignmentType.md) |  | [optional] 

## Example

```python
from openapi_client.models.assignment import Assignment

# TODO update the JSON string below
json = "{}"
# create an instance of Assignment from a JSON string
assignment_instance = Assignment.from_json(json)
# print the JSON string representation of the object
print(Assignment.to_json())

# convert the object into a dict
assignment_dict = assignment_instance.to_dict()
# create an instance of Assignment from a dict
assignment_from_dict = Assignment.from_dict(assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


