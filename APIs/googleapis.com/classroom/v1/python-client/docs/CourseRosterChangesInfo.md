# CourseRosterChangesInfo

Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**course_id** | **str** | The &#x60;course_id&#x60; of the course to subscribe to roster changes for. | [optional] 

## Example

```python
from openapi_client.models.course_roster_changes_info import CourseRosterChangesInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CourseRosterChangesInfo from a JSON string
course_roster_changes_info_instance = CourseRosterChangesInfo.from_json(json)
# print the JSON string representation of the object
print(CourseRosterChangesInfo.to_json())

# convert the object into a dict
course_roster_changes_info_dict = course_roster_changes_info_instance.to_dict()
# create an instance of CourseRosterChangesInfo from a dict
course_roster_changes_info_from_dict = CourseRosterChangesInfo.from_dict(course_roster_changes_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


