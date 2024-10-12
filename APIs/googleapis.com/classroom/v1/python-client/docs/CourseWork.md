# CourseWork

Course work created by a teacher for students of the course.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this course work in the Classroom web UI. This is only populated if &#x60;state&#x60; is &#x60;PUBLISHED&#x60;. Read-only. | [optional] 
**assignee_mode** | **str** | Assignee mode of the coursework. If unspecified, the default value is &#x60;ALL_STUDENTS&#x60;. | [optional] 
**assignment** | [**Assignment**](Assignment.md) |  | [optional] 
**associated_with_developer** | **bool** | Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only. | [optional] 
**course_id** | **str** | Identifier of the course. Read-only. | [optional] 
**creation_time** | **str** | Timestamp when this course work was created. Read-only. | [optional] 
**creator_user_id** | **str** | Identifier for the user that created the coursework. Read-only. | [optional] 
**description** | **str** | Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters. | [optional] 
**due_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**due_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**grade_category** | [**GradeCategory**](GradeCategory.md) |  | [optional] 
**id** | **str** | Classroom-assigned identifier of this course work, unique per course. Read-only. | [optional] 
**individual_students_options** | [**IndividualStudentsOptions**](IndividualStudentsOptions.md) |  | [optional] 
**materials** | [**List[Material]**](Material.md) | Additional materials. CourseWork must have no more than 20 material items. | [optional] 
**max_points** | **float** | Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value. | [optional] 
**multiple_choice_question** | [**MultipleChoiceQuestion**](MultipleChoiceQuestion.md) |  | [optional] 
**scheduled_time** | **str** | Optional timestamp when this course work is scheduled to be published. | [optional] 
**state** | **str** | Status of this course work. If unspecified, the default state is &#x60;DRAFT&#x60;. | [optional] 
**submission_modification_mode** | **str** | Setting to determine when students are allowed to modify submissions. If unspecified, the default value is &#x60;MODIFIABLE_UNTIL_TURNED_IN&#x60;. | [optional] 
**title** | **str** | Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters. | [optional] 
**topic_id** | **str** | Identifier for the topic that this coursework is associated with. Must match an existing topic in the course. | [optional] 
**update_time** | **str** | Timestamp of the most recent change to this course work. Read-only. | [optional] 
**work_type** | **str** | Type of this course work. The type is set when the course work is created and cannot be changed. | [optional] 

## Example

```python
from openapi_client.models.course_work import CourseWork

# TODO update the JSON string below
json = "{}"
# create an instance of CourseWork from a JSON string
course_work_instance = CourseWork.from_json(json)
# print the JSON string representation of the object
print(CourseWork.to_json())

# convert the object into a dict
course_work_dict = course_work_instance.to_dict()
# create an instance of CourseWork from a dict
course_work_from_dict = CourseWork.from_dict(course_work_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


