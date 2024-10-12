# GoogleClassroomSubmission

A coursework submission on Google Classroom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this coursework in the Classroom web UI | [optional] 
**id** | **str** | Identifier of the coursework submission assigned by Classroom | [optional] 
**state** | **str** | State of the submission on Google Classroom | [optional] 

## Example

```python
from openapi_client.models.google_classroom_submission import GoogleClassroomSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleClassroomSubmission from a JSON string
google_classroom_submission_instance = GoogleClassroomSubmission.from_json(json)
# print the JSON string representation of the object
print(GoogleClassroomSubmission.to_json())

# convert the object into a dict
google_classroom_submission_dict = google_classroom_submission_instance.to_dict()
# create an instance of GoogleClassroomSubmission from a dict
google_classroom_submission_from_dict = GoogleClassroomSubmission.from_dict(google_classroom_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


