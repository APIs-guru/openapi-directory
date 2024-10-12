# Announcement

Announcement created by a teacher for students of the course

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this announcement in the Classroom web UI. This is only populated if &#x60;state&#x60; is &#x60;PUBLISHED&#x60;. Read-only. | [optional] 
**assignee_mode** | **str** | Assignee mode of the announcement. If unspecified, the default value is &#x60;ALL_STUDENTS&#x60;. | [optional] 
**course_id** | **str** | Identifier of the course. Read-only. | [optional] 
**creation_time** | **str** | Timestamp when this announcement was created. Read-only. | [optional] 
**creator_user_id** | **str** | Identifier for the user that created the announcement. Read-only. | [optional] 
**id** | **str** | Classroom-assigned identifier of this announcement, unique per course. Read-only. | [optional] 
**individual_students_options** | [**IndividualStudentsOptions**](IndividualStudentsOptions.md) |  | [optional] 
**materials** | [**List[Material]**](Material.md) | Additional materials. Announcements must have no more than 20 material items. | [optional] 
**scheduled_time** | **str** | Optional timestamp when this announcement is scheduled to be published. | [optional] 
**state** | **str** | Status of this announcement. If unspecified, the default state is &#x60;DRAFT&#x60;. | [optional] 
**text** | **str** | Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters. | [optional] 
**update_time** | **str** | Timestamp of the most recent change to this announcement. Read-only. | [optional] 

## Example

```python
from openapi_client.models.announcement import Announcement

# TODO update the JSON string below
json = "{}"
# create an instance of Announcement from a JSON string
announcement_instance = Announcement.from_json(json)
# print the JSON string representation of the object
print(Announcement.to_json())

# convert the object into a dict
announcement_dict = announcement_instance.to_dict()
# create an instance of Announcement from a dict
announcement_from_dict = Announcement.from_dict(announcement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


