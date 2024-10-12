# Announcement

Represents an announcement set by an administrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_day** | **bool** | Whether the announcement has a start/end time. | 
**created_at** | **str** | When the announcement was created. | 
**ends_at** | **str** | When the future announcement will end. ISO 8601 Datetime. | [optional] 
**id** | **str** | The announcement id. Cast from an integer, but not guaranteed to be a number. | 
**published** | **bool** | Whether the announcement is currently active. | 
**read** | **bool** | Whether the announcement has been read by the user. | 
**scheduled_at** | **str** | When the future announcement was scheduled. ISO 8601 Datetime. | [optional] 
**starts_at** | **str** | When the future announcement will start. ISO 8601 Datetime. | [optional] 
**text** | **str** | The content of the announcement. | 
**updated_at** | **str** | When the announcement was last updated. ISO 8601 Datetime. | 

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


