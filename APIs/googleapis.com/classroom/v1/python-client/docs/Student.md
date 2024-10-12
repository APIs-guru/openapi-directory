# Student

Student in a course.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**course_id** | **str** | Identifier of the course. Read-only. | [optional] 
**profile** | [**UserProfile**](UserProfile.md) |  | [optional] 
**student_work_folder** | [**DriveFolder**](DriveFolder.md) |  | [optional] 
**user_id** | **str** | Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal &#x60;\&quot;me\&quot;&#x60;, indicating the requesting user | [optional] 

## Example

```python
from openapi_client.models.student import Student

# TODO update the JSON string below
json = "{}"
# create an instance of Student from a JSON string
student_instance = Student.from_json(json)
# print the JSON string representation of the object
print(Student.to_json())

# convert the object into a dict
student_dict = student_instance.to_dict()
# create an instance of Student from a dict
student_from_dict = Student.from_dict(student_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


