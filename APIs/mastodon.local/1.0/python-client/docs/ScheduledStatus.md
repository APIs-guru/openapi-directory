# ScheduledStatus

Represents a status that will be published at a future scheduled date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the scheduled status in the database. Cast from an integer, but not guaranteed to be a number. | 
**media_attachments** | [**List[Attachment]**](Attachment.md) | Array of attachements | 
**params** | [**StatusParams**](StatusParams.md) |  | 
**scheduled_at** | **datetime** | ID of the status in the database. ISO 8601 Datetime. | 

## Example

```python
from openapi_client.models.scheduled_status import ScheduledStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledStatus from a JSON string
scheduled_status_instance = ScheduledStatus.from_json(json)
# print the JSON string representation of the object
print(ScheduledStatus.to_json())

# convert the object into a dict
scheduled_status_dict = scheduled_status_instance.to_dict()
# create an instance of ScheduledStatus from a dict
scheduled_status_from_dict = ScheduledStatus.from_dict(scheduled_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


