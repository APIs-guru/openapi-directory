# EnterpriseTopazSidekickAgendaEntry

An AgendaEntry, e.g., a Calendar Event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agenda_item_url** | **str** | URL of the agenda item. | [optional] 
**chronology** | **str** | The chronology from the present. | [optional] 
**creator** | [**EnterpriseTopazSidekickPerson**](EnterpriseTopazSidekickPerson.md) |  | [optional] 
**current_user_attending_status** | **str** | Attendance status for the current user making the request. This is a convenience data member in order to avoid figuring out the same by iterating the invitee list above on the caller side. | [optional] 
**description** | **str** | Description of the agenda item (i.e., typically, summary in calendar event). | [optional] 
**document** | [**List[EnterpriseTopazSidekickCommonDocument]**](EnterpriseTopazSidekickCommonDocument.md) | Items related to the current AgendaEntry. E.g., related drive/mail/groups documents. | [optional] 
**end_date** | **str** | End date \&quot;Friday, August 26\&quot; in the user&#39;s timezone. | [optional] 
**end_time** | **str** | End time (HH:mm) in the user&#39;s timezone. | [optional] 
**end_time_ms** | **str** | End time in milliseconds | [optional] 
**event_id** | **str** | Event id provided by Calendar API. | [optional] 
**guests_can_invite_others** | **bool** | Whether the guests can invite other guests. | [optional] 
**guests_can_modify** | **bool** | Whether the guests can modify the event. | [optional] 
**guests_can_see_guests** | **bool** | Whether the guests of the event can be seen. If false, the user is going to be reported as the only attendee to the meeting, even though there may be more attendees. | [optional] 
**hangout_id** | **str** | Hangout meeting identifier. | [optional] 
**hangout_url** | **str** | Absolute URL for the Hangout meeting. | [optional] 
**invitee** | [**List[EnterpriseTopazSidekickPerson]**](EnterpriseTopazSidekickPerson.md) | People attending the meeting. | [optional] 
**is_all_day** | **bool** | Whether the entry lasts all day. | [optional] 
**last_modification_time_ms** | **str** | Last time the event was modified. | [optional] 
**location** | **str** | Agenda item location. | [optional] 
**notify_to_user** | **bool** | Whether this should be notified to the user. | [optional] 
**other_attendees_excluded** | **bool** | Whether guest list is not returned because number of attendees is too large. | [optional] 
**requester_is_owner** | **bool** | Whether the requester is the owner of the agenda entry. | [optional] 
**show_full_event_details_to_use** | **bool** | Whether the details of this entry should be displayed to the user. | [optional] 
**start_date** | **str** | Start date \&quot;Friday, August 26\&quot; in the user&#39;s timezone. | [optional] 
**start_time** | **str** | Start time (HH:mm) in the user&#39;s timezone. | [optional] 
**start_time_ms** | **str** | Start time in milliseconds. | [optional] 
**time_zone** | **str** | User&#39;s calendar timezone; | [optional] 
**title** | **str** | Title of the agenda item. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_agenda_entry import EnterpriseTopazSidekickAgendaEntry

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAgendaEntry from a JSON string
enterprise_topaz_sidekick_agenda_entry_instance = EnterpriseTopazSidekickAgendaEntry.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAgendaEntry.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_agenda_entry_dict = enterprise_topaz_sidekick_agenda_entry_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAgendaEntry from a dict
enterprise_topaz_sidekick_agenda_entry_from_dict = EnterpriseTopazSidekickAgendaEntry.from_dict(enterprise_topaz_sidekick_agenda_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


