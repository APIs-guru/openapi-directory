# EnterpriseTopazSidekickMeetingNotesCardProto

Information about the meeting notes created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**EnterpriseTopazSidekickAgendaEntry**](EnterpriseTopazSidekickAgendaEntry.md) |  | [optional] 
**file_id** | **str** | Google Drive ID (a.k.a. resource ID) of the file. | [optional] 
**title** | **str** | Title we want to show for meeting notes in the answer card | [optional] 
**url** | **str** | New URL. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_meeting_notes_card_proto import EnterpriseTopazSidekickMeetingNotesCardProto

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickMeetingNotesCardProto from a JSON string
enterprise_topaz_sidekick_meeting_notes_card_proto_instance = EnterpriseTopazSidekickMeetingNotesCardProto.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickMeetingNotesCardProto.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_meeting_notes_card_proto_dict = enterprise_topaz_sidekick_meeting_notes_card_proto_instance.to_dict()
# create an instance of EnterpriseTopazSidekickMeetingNotesCardProto from a dict
enterprise_topaz_sidekick_meeting_notes_card_proto_from_dict = EnterpriseTopazSidekickMeetingNotesCardProto.from_dict(enterprise_topaz_sidekick_meeting_notes_card_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


