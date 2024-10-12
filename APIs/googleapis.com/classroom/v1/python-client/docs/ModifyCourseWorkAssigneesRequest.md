# ModifyCourseWorkAssigneesRequest

Request to modify assignee mode and options of a coursework.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee_mode** | **str** | Mode of the coursework describing whether it will be assigned to all students or specified individual students. | [optional] 
**modify_individual_students_options** | [**ModifyIndividualStudentsOptions**](ModifyIndividualStudentsOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.modify_course_work_assignees_request import ModifyCourseWorkAssigneesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyCourseWorkAssigneesRequest from a JSON string
modify_course_work_assignees_request_instance = ModifyCourseWorkAssigneesRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyCourseWorkAssigneesRequest.to_json())

# convert the object into a dict
modify_course_work_assignees_request_dict = modify_course_work_assignees_request_instance.to_dict()
# create an instance of ModifyCourseWorkAssigneesRequest from a dict
modify_course_work_assignees_request_from_dict = ModifyCourseWorkAssigneesRequest.from_dict(modify_course_work_assignees_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


