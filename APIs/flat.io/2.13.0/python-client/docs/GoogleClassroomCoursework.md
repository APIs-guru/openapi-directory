# GoogleClassroomCoursework

A coursework on Google Classroom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this coursework in the Classroom web UI | [optional] 
**id** | **str** | Identifier of the coursework assigned by Classroom | [optional] 
**state** | **str** | State of the coursework | [optional] 
**topic_id** | **str** | Identifier of the topic where the assignment is created | [optional] 

## Example

```python
from openapi_client.models.google_classroom_coursework import GoogleClassroomCoursework

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleClassroomCoursework from a JSON string
google_classroom_coursework_instance = GoogleClassroomCoursework.from_json(json)
# print the JSON string representation of the object
print(GoogleClassroomCoursework.to_json())

# convert the object into a dict
google_classroom_coursework_dict = google_classroom_coursework_instance.to_dict()
# create an instance of GoogleClassroomCoursework from a dict
google_classroom_coursework_from_dict = GoogleClassroomCoursework.from_dict(google_classroom_coursework_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


