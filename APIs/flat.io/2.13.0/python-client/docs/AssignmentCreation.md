# AssignmentCreation

Assignment creation details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_students** | **List[str]** | Identifiers for the students that have access to the assignment | [optional] 
**assignee_mode** | **str** | Possible modes of assigning assignments | [optional] 
**attachments** | [**List[ClassAttachmentCreation]**](ClassAttachmentCreation.md) |  | [optional] 
**cover** | **str** | The URL of the cover to display | [optional] 
**cover_file** | **str** | The id of the cover to display | [optional] 
**description** | **str** | Description and content of the assignment | [optional] 
**due_date** | **datetime** | The due date of this assignment, late submissions will be marked as paste due. If not set, the assignment won&#39;t have a due date.  | [optional] 
**google_classroom** | [**AssignmentCreationGoogleClassroom**](AssignmentCreationGoogleClassroom.md) |  | [optional] 
**max_points** | **float** | If set, the grading will be enabled for the assignement with this value as the maximum of points  | [optional] 
**microsoft_graph** | [**AssignmentCreationMicrosoftGraph**](AssignmentCreationMicrosoftGraph.md) |  | [optional] 
**nb_playback_authorized** | **float** | The number of playback authorized on the scores of the assignment. | [optional] 
**scheduled_date** | **datetime** | The publication (scheduled) date of the assignment. If this one is specified, the assignment will only be listed to the teachers of the class.  | [optional] 
**state** | **str** | State of the assignment | [optional] 
**title** | **str** | Title of the assignment | [optional] 
**toolset** | **str** | The id of the associated toolset | [optional] 
**type** | [**AssignmentType**](AssignmentType.md) |  | [optional] 

## Example

```python
from openapi_client.models.assignment_creation import AssignmentCreation

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentCreation from a JSON string
assignment_creation_instance = AssignmentCreation.from_json(json)
# print the JSON string representation of the object
print(AssignmentCreation.to_json())

# convert the object into a dict
assignment_creation_dict = assignment_creation_instance.to_dict()
# create an instance of AssignmentCreation from a dict
assignment_creation_from_dict = AssignmentCreation.from_dict(assignment_creation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


