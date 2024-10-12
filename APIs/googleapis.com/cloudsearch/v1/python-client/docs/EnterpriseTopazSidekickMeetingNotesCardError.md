# EnterpriseTopazSidekickMeetingNotesCardError

Errors in the creation of meeting notes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the reason why create-meeting-notes failed. | [optional] 
**event** | [**EnterpriseTopazSidekickAgendaEntry**](EnterpriseTopazSidekickAgendaEntry.md) |  | [optional] 
**reason** | **str** | The reason why create-meeting-notes failed. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_meeting_notes_card_error import EnterpriseTopazSidekickMeetingNotesCardError

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickMeetingNotesCardError from a JSON string
enterprise_topaz_sidekick_meeting_notes_card_error_instance = EnterpriseTopazSidekickMeetingNotesCardError.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickMeetingNotesCardError.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_meeting_notes_card_error_dict = enterprise_topaz_sidekick_meeting_notes_card_error_instance.to_dict()
# create an instance of EnterpriseTopazSidekickMeetingNotesCardError from a dict
enterprise_topaz_sidekick_meeting_notes_card_error_from_dict = EnterpriseTopazSidekickMeetingNotesCardError.from_dict(enterprise_topaz_sidekick_meeting_notes_card_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


