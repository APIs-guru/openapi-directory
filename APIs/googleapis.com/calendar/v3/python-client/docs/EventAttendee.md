# EventAttendee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_guests** | **int** | Number of additional guests. Optional. The default is 0. | [optional] [default to 0]
**comment** | **str** | The attendee&#39;s response comment. Optional. | [optional] 
**display_name** | **str** | The attendee&#39;s name, if available. Optional. | [optional] 
**email** | **str** | The attendee&#39;s email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322. Required when adding an attendee. | [optional] 
**id** | **str** | The attendee&#39;s Profile ID, if available. | [optional] 
**optional** | **bool** | Whether this is an optional attendee. Optional. The default is False. | [optional] [default to False]
**organizer** | **bool** | Whether the attendee is the organizer of the event. Read-only. The default is False. | [optional] 
**resource** | **bool** | Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False. | [optional] [default to False]
**response_status** | **str** | The attendee&#39;s response status. Possible values are:   - \&quot;needsAction\&quot; - The attendee has not responded to the invitation (recommended for new events).  - \&quot;declined\&quot; - The attendee has declined the invitation.  - \&quot;tentative\&quot; - The attendee has tentatively accepted the invitation.  - \&quot;accepted\&quot; - The attendee has accepted the invitation.  Warning: If you add an event using the values declined, tentative, or accepted, attendees with the \&quot;Add invitations to my calendar\&quot; setting set to \&quot;When I respond to invitation in email\&quot; won&#39;t see an event on their calendar unless they choose to change their invitation response in the event invitation email. | [optional] 
**var_self** | **bool** | Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False. | [optional] [default to False]

## Example

```python
from openapi_client.models.event_attendee import EventAttendee

# TODO update the JSON string below
json = "{}"
# create an instance of EventAttendee from a JSON string
event_attendee_instance = EventAttendee.from_json(json)
# print the JSON string representation of the object
print(EventAttendee.to_json())

# convert the object into a dict
event_attendee_dict = event_attendee_instance.to_dict()
# create an instance of EventAttendee from a dict
event_attendee_from_dict = EventAttendee.from_dict(event_attendee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


