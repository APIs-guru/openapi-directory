# CourseWorkMaterial

Course work material created by a teacher for students of the course

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this course work material in the Classroom web UI. This is only populated if &#x60;state&#x60; is &#x60;PUBLISHED&#x60;. Read-only. | [optional] 
**assignee_mode** | **str** | Assignee mode of the course work material. If unspecified, the default value is &#x60;ALL_STUDENTS&#x60;. | [optional] 
**course_id** | **str** | Identifier of the course. Read-only. | [optional] 
**creation_time** | **str** | Timestamp when this course work material was created. Read-only. | [optional] 
**creator_user_id** | **str** | Identifier for the user that created the course work material. Read-only. | [optional] 
**description** | **str** | Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters. | [optional] 
**id** | **str** | Classroom-assigned identifier of this course work material, unique per course. Read-only. | [optional] 
**individual_students_options** | [**IndividualStudentsOptions**](IndividualStudentsOptions.md) |  | [optional] 
**materials** | [**List[Material]**](Material.md) | Additional materials. A course work material must have no more than 20 material items. | [optional] 
**scheduled_time** | **str** | Optional timestamp when this course work material is scheduled to be published. | [optional] 
**state** | **str** | Status of this course work material. If unspecified, the default state is &#x60;DRAFT&#x60;. | [optional] 
**title** | **str** | Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters. | [optional] 
**topic_id** | **str** | Identifier for the topic that this course work material is associated with. Must match an existing topic in the course. | [optional] 
**update_time** | **str** | Timestamp of the most recent change to this course work material. Read-only. | [optional] 

## Example

```python
from openapi_client.models.course_work_material import CourseWorkMaterial

# TODO update the JSON string below
json = "{}"
# create an instance of CourseWorkMaterial from a JSON string
course_work_material_instance = CourseWorkMaterial.from_json(json)
# print the JSON string representation of the object
print(CourseWorkMaterial.to_json())

# convert the object into a dict
course_work_material_dict = course_work_material_instance.to_dict()
# create an instance of CourseWorkMaterial from a dict
course_work_material_from_dict = CourseWorkMaterial.from_dict(course_work_material_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


