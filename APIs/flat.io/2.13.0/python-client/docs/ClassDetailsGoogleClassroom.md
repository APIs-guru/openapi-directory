# ClassDetailsGoogleClassroom

Google Classroom course-related information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this course in the Classroom web UI | [optional] 
**id** | **str** | The course identifier on Google Classroom | [optional] 

## Example

```python
from openapi_client.models.class_details_google_classroom import ClassDetailsGoogleClassroom

# TODO update the JSON string below
json = "{}"
# create an instance of ClassDetailsGoogleClassroom from a JSON string
class_details_google_classroom_instance = ClassDetailsGoogleClassroom.from_json(json)
# print the JSON string representation of the object
print(ClassDetailsGoogleClassroom.to_json())

# convert the object into a dict
class_details_google_classroom_dict = class_details_google_classroom_instance.to_dict()
# create an instance of ClassDetailsGoogleClassroom from a dict
class_details_google_classroom_from_dict = ClassDetailsGoogleClassroom.from_dict(class_details_google_classroom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


