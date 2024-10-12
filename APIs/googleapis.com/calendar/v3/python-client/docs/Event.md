# Event


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anyone_can_add_self** | **bool** | Whether anyone can invite themselves to the event (deprecated). Optional. The default is False. | [optional] [default to False]
**attachments** | [**List[EventAttachment]**](EventAttachment.md) | File attachments for the event. In order to modify attachments the supportsAttachments request parameter should be set to true. There can be at most 25 attachments per event, | [optional] 
**attendees** | [**List[EventAttendee]**](EventAttendee.md) | The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list. | [optional] 
**attendees_omitted** | **bool** | Whether attendees may have been omitted from the event&#39;s representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant&#39;s response. Optional. The default is False. | [optional] [default to False]
**color_id** | **str** | The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional. | [optional] 
**conference_data** | [**ConferenceData**](ConferenceData.md) |  | [optional] 
**created** | **datetime** | Creation time of the event (as a RFC3339 timestamp). Read-only. | [optional] 
**creator** | [**EventCreator**](EventCreator.md) |  | [optional] 
**description** | **str** | Description of the event. Can contain HTML. Optional. | [optional] 
**end** | [**EventDateTime**](EventDateTime.md) |  | [optional] 
**end_time_unspecified** | **bool** | Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False. | [optional] [default to False]
**etag** | **str** | ETag of the resource. | [optional] 
**event_type** | **str** | Specific type of the event. This cannot be modified after the event is created. Possible values are:   - \&quot;default\&quot; - A regular event or not further specified.  - \&quot;outOfOffice\&quot; - An out-of-office event.  - \&quot;focusTime\&quot; - A focus-time event.  - \&quot;workingLocation\&quot; - A working location event.  Currently, only \&quot;default \&quot; and \&quot;workingLocation\&quot; events can be created using the API. Extended support for other event types will be made available in later releases. | [optional] [default to 'default']
**extended_properties** | [**EventExtendedProperties**](EventExtendedProperties.md) |  | [optional] 
**focus_time_properties** | [**EventFocusTimeProperties**](EventFocusTimeProperties.md) |  | [optional] 
**gadget** | [**EventGadget**](EventGadget.md) |  | [optional] 
**guests_can_invite_others** | **bool** | Whether attendees other than the organizer can invite others to the event. Optional. The default is True. | [optional] [default to True]
**guests_can_modify** | **bool** | Whether attendees other than the organizer can modify the event. Optional. The default is False. | [optional] [default to False]
**guests_can_see_other_guests** | **bool** | Whether attendees other than the organizer can see who the event&#39;s attendees are. Optional. The default is True. | [optional] [default to True]
**hangout_link** | **str** | An absolute link to the Google Hangout associated with this event. Read-only. | [optional] 
**html_link** | **str** | An absolute link to this event in the Google Calendar Web UI. Read-only. | [optional] 
**i_cal_uid** | **str** | Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method. Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method. | [optional] 
**id** | **str** | Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:   - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938  - the length of the ID must be between 5 and 1024 characters  - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122. If you do not specify an ID, it will be automatically generated by the server. Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs. | [optional] 
**kind** | **str** | Type of the resource (\&quot;calendar#event\&quot;). | [optional] [default to 'calendar#event']
**location** | **str** | Geographic location of the event as free-form text. Optional. | [optional] 
**locked** | **bool** | Whether this is a locked event copy where no changes can be made to the main event fields \&quot;summary\&quot;, \&quot;description\&quot;, \&quot;location\&quot;, \&quot;start\&quot;, \&quot;end\&quot; or \&quot;recurrence\&quot;. The default is False. Read-Only. | [optional] [default to False]
**organizer** | [**EventOrganizer**](EventOrganizer.md) |  | [optional] 
**original_start_time** | [**EventDateTime**](EventDateTime.md) |  | [optional] 
**out_of_office_properties** | [**EventOutOfOfficeProperties**](EventOutOfOfficeProperties.md) |  | [optional] 
**private_copy** | **bool** | If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False. | [optional] [default to False]
**recurrence** | **List[str]** | List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events. | [optional] 
**recurring_event_id** | **str** | For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable. | [optional] 
**reminders** | [**EventReminders**](EventReminders.md) |  | [optional] 
**sequence** | **int** | Sequence number as per iCalendar. | [optional] 
**source** | [**EventSource**](EventSource.md) |  | [optional] 
**start** | [**EventDateTime**](EventDateTime.md) |  | [optional] 
**status** | **str** | Status of the event. Optional. Possible values are:   - \&quot;confirmed\&quot; - The event is confirmed. This is the default status.  - \&quot;tentative\&quot; - The event is tentatively confirmed.  - \&quot;cancelled\&quot; - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them. A cancelled status represents two different states depending on the event type:   - Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event. Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.   - All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely. Deleted events are only guaranteed to have the id field populated.   On the organizer&#39;s calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details. If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated. | [optional] 
**summary** | **str** | Title of the event. | [optional] 
**transparency** | **str** | Whether the event blocks time on the calendar. Optional. Possible values are:   - \&quot;opaque\&quot; - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.  - \&quot;transparent\&quot; - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI. | [optional] [default to 'opaque']
**updated** | **datetime** | Last modification time of the event (as a RFC3339 timestamp). Read-only. | [optional] 
**visibility** | **str** | Visibility of the event. Optional. Possible values are:   - \&quot;default\&quot; - Uses the default visibility for events on the calendar. This is the default value.  - \&quot;public\&quot; - The event is public and event details are visible to all readers of the calendar.  - \&quot;private\&quot; - The event is private and only event attendees may view event details.  - \&quot;confidential\&quot; - The event is private. This value is provided for compatibility reasons. | [optional] [default to 'default']
**working_location_properties** | [**EventWorkingLocationProperties**](EventWorkingLocationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.event import Event

# TODO update the JSON string below
json = "{}"
# create an instance of Event from a JSON string
event_instance = Event.from_json(json)
# print the JSON string representation of the object
print(Event.to_json())

# convert the object into a dict
event_dict = event_instance.to_dict()
# create an instance of Event from a dict
event_from_dict = Event.from_dict(event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


