# Course

A Course in Classroom.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this course in the Classroom web UI. Read-only. | [optional] 
**calendar_id** | **str** | The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. The Calendar for a course is created asynchronously when the course is set to &#x60;CourseState.ACTIVE&#x60; for the first time (at creation time or when it is updated to &#x60;ACTIVE&#x60; through the UI or the API). The Calendar ID will not be populated until the creation process is completed. Read-only. | [optional] 
**course_group_email** | **str** | The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only. | [optional] 
**course_material_sets** | [**List[CourseMaterialSet]**](CourseMaterialSet.md) | Sets of materials that appear on the \&quot;about\&quot; page of this course. Read-only. | [optional] 
**course_state** | **str** | State of the course. If unspecified, the default state is &#x60;PROVISIONED&#x60;. | [optional] 
**creation_time** | **str** | Creation time of the course. Specifying this field in a course update mask results in an error. Read-only. | [optional] 
**description** | **str** | Optional description. For example, \&quot;We&#39;ll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!\&quot; If set, this field must be a valid UTF-8 string and no longer than 30,000 characters. | [optional] 
**description_heading** | **str** | Optional heading for the description. For example, \&quot;Welcome to 10th Grade Biology.\&quot; If set, this field must be a valid UTF-8 string and no longer than 3600 characters. | [optional] 
**enrollment_code** | **str** | Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only. | [optional] 
**gradebook_settings** | [**GradebookSettings**](GradebookSettings.md) |  | [optional] 
**guardians_enabled** | **bool** | Whether or not guardian notifications are enabled for this course. Read-only. | [optional] 
**id** | **str** | Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The &#x60;id&#x60; is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error. | [optional] 
**name** | **str** | Name of the course. For example, \&quot;10th Grade Biology\&quot;. The name is required. It must be between 1 and 750 characters and a valid UTF-8 string. | [optional] 
**owner_id** | **str** | The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal &#x60;\&quot;me\&quot;&#x60;, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only. | [optional] 
**room** | **str** | Optional room location. For example, \&quot;301\&quot;. If set, this field must be a valid UTF-8 string and no longer than 650 characters. | [optional] 
**section** | **str** | Section of the course. For example, \&quot;Period 2\&quot;. If set, this field must be a valid UTF-8 string and no longer than 2800 characters. | [optional] 
**teacher_folder** | [**DriveFolder**](DriveFolder.md) |  | [optional] 
**teacher_group_email** | **str** | The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only. | [optional] 
**update_time** | **str** | Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only. | [optional] 

## Example

```python
from openapi_client.models.course import Course

# TODO update the JSON string below
json = "{}"
# create an instance of Course from a JSON string
course_instance = Course.from_json(json)
# print the JSON string representation of the object
print(Course.to_json())

# convert the object into a dict
course_dict = course_instance.to_dict()
# create an instance of Course from a dict
course_from_dict = Course.from_dict(course_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


