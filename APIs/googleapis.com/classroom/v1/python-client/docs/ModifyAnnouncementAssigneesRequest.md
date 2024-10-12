# ModifyAnnouncementAssigneesRequest

Request to modify assignee mode and options of an announcement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee_mode** | **str** | Mode of the announcement describing whether it is accessible by all students or specified individual students. | [optional] 
**modify_individual_students_options** | [**ModifyIndividualStudentsOptions**](ModifyIndividualStudentsOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.modify_announcement_assignees_request import ModifyAnnouncementAssigneesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyAnnouncementAssigneesRequest from a JSON string
modify_announcement_assignees_request_instance = ModifyAnnouncementAssigneesRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyAnnouncementAssigneesRequest.to_json())

# convert the object into a dict
modify_announcement_assignees_request_dict = modify_announcement_assignees_request_instance.to_dict()
# create an instance of ModifyAnnouncementAssigneesRequest from a dict
modify_announcement_assignees_request_from_dict = ModifyAnnouncementAssigneesRequest.from_dict(modify_announcement_assignees_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


