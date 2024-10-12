# AssignmentCreationGoogleClassroom

Google Classroom options for this assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic_id** | **str** | Identifier of the topic where the assignment is created | [optional] 

## Example

```python
from openapi_client.models.assignment_creation_google_classroom import AssignmentCreationGoogleClassroom

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentCreationGoogleClassroom from a JSON string
assignment_creation_google_classroom_instance = AssignmentCreationGoogleClassroom.from_json(json)
# print the JSON string representation of the object
print(AssignmentCreationGoogleClassroom.to_json())

# convert the object into a dict
assignment_creation_google_classroom_dict = assignment_creation_google_classroom_instance.to_dict()
# create an instance of AssignmentCreationGoogleClassroom from a dict
assignment_creation_google_classroom_from_dict = AssignmentCreationGoogleClassroom.from_dict(assignment_creation_google_classroom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


