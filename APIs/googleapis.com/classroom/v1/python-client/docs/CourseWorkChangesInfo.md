# CourseWorkChangesInfo

Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**course_id** | **str** | The &#x60;course_id&#x60; of the course to subscribe to work changes for. | [optional] 

## Example

```python
from openapi_client.models.course_work_changes_info import CourseWorkChangesInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CourseWorkChangesInfo from a JSON string
course_work_changes_info_instance = CourseWorkChangesInfo.from_json(json)
# print the JSON string representation of the object
print(CourseWorkChangesInfo.to_json())

# convert the object into a dict
course_work_changes_info_dict = course_work_changes_info_instance.to_dict()
# create an instance of CourseWorkChangesInfo from a dict
course_work_changes_info_from_dict = CourseWorkChangesInfo.from_dict(course_work_changes_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


