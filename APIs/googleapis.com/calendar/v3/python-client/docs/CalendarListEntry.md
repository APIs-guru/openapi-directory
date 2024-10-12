# CalendarListEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_role** | **str** | The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:   - \&quot;freeBusyReader\&quot; - Provides read access to free/busy information.  - \&quot;reader\&quot; - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.  - \&quot;writer\&quot; - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.  - \&quot;owner\&quot; - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs. | [optional] 
**background_color** | **str** | The main color of the calendar in the hexadecimal format \&quot;#0088aa\&quot;. This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat&#x3D;true in the parameters of the insert, update and patch methods. Optional. | [optional] 
**color_id** | **str** | The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional. | [optional] 
**conference_properties** | [**ConferenceProperties**](ConferenceProperties.md) |  | [optional] 
**default_reminders** | [**List[EventReminder]**](EventReminder.md) | The default reminders that the authenticated user has for this calendar. | [optional] 
**deleted** | **bool** | Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False. | [optional] [default to False]
**description** | **str** | Description of the calendar. Optional. Read-only. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**foreground_color** | **str** | The foreground color of the calendar in the hexadecimal format \&quot;#ffffff\&quot;. This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat&#x3D;true in the parameters of the insert, update and patch methods. Optional. | [optional] 
**hidden** | **bool** | Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true. | [optional] [default to False]
**id** | **str** | Identifier of the calendar. | [optional] 
**kind** | **str** | Type of the resource (\&quot;calendar#calendarListEntry\&quot;). | [optional] [default to 'calendar#calendarListEntry']
**location** | **str** | Geographic location of the calendar as free-form text. Optional. Read-only. | [optional] 
**notification_settings** | [**CalendarListEntryNotificationSettings**](CalendarListEntryNotificationSettings.md) |  | [optional] 
**primary** | **bool** | Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False. | [optional] [default to False]
**selected** | **bool** | Whether the calendar content shows up in the calendar UI. Optional. The default is False. | [optional] [default to False]
**summary** | **str** | Title of the calendar. Read-only. | [optional] 
**summary_override** | **str** | The summary that the authenticated user has set for this calendar. Optional. | [optional] 
**time_zone** | **str** | The time zone of the calendar. Optional. Read-only. | [optional] 

## Example

```python
from openapi_client.models.calendar_list_entry import CalendarListEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarListEntry from a JSON string
calendar_list_entry_instance = CalendarListEntry.from_json(json)
# print the JSON string representation of the object
print(CalendarListEntry.to_json())

# convert the object into a dict
calendar_list_entry_dict = calendar_list_entry_instance.to_dict()
# create an instance of CalendarListEntry from a dict
calendar_list_entry_from_dict = CalendarListEntry.from_dict(calendar_list_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


