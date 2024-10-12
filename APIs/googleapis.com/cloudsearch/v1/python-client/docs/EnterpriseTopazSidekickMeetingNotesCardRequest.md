# EnterpriseTopazSidekickMeetingNotesCardRequest

Meeting notes card request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_create_for** | **List[str]** | Who are the meeting notes created for. | [optional] 
**error** | [**EnterpriseTopazSidekickMeetingNotesCardError**](EnterpriseTopazSidekickMeetingNotesCardError.md) |  | [optional] 
**event** | [**EnterpriseTopazSidekickAgendaEntry**](EnterpriseTopazSidekickAgendaEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_meeting_notes_card_request import EnterpriseTopazSidekickMeetingNotesCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickMeetingNotesCardRequest from a JSON string
enterprise_topaz_sidekick_meeting_notes_card_request_instance = EnterpriseTopazSidekickMeetingNotesCardRequest.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickMeetingNotesCardRequest.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_meeting_notes_card_request_dict = enterprise_topaz_sidekick_meeting_notes_card_request_instance.to_dict()
# create an instance of EnterpriseTopazSidekickMeetingNotesCardRequest from a dict
enterprise_topaz_sidekick_meeting_notes_card_request_from_dict = EnterpriseTopazSidekickMeetingNotesCardRequest.from_dict(enterprise_topaz_sidekick_meeting_notes_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


