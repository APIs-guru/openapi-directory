# Events


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_role** | **str** | The user&#39;s access role for this calendar. Read-only. Possible values are:   - \&quot;none\&quot; - The user has no access.  - \&quot;freeBusyReader\&quot; - The user has read access to free/busy information.  - \&quot;reader\&quot; - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.  - \&quot;writer\&quot; - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.  - \&quot;owner\&quot; - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs. | [optional] 
**default_reminders** | [**List[EventReminder]**](EventReminder.md) | The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True). | [optional] 
**description** | **str** | Description of the calendar. Read-only. | [optional] 
**etag** | **str** | ETag of the collection. | [optional] 
**items** | [**List[Event]**](Event.md) | List of events on the calendar. | [optional] 
**kind** | **str** | Type of the collection (\&quot;calendar#events\&quot;). | [optional] [default to 'calendar#events']
**next_page_token** | **str** | Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. | [optional] 
**next_sync_token** | **str** | Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. | [optional] 
**summary** | **str** | Title of the calendar. Read-only. | [optional] 
**time_zone** | **str** | The time zone of the calendar. Read-only. | [optional] 
**updated** | **datetime** | Last modification time of the calendar (as a RFC3339 timestamp). Read-only. | [optional] 

## Example

```python
from openapi_client.models.events import Events

# TODO update the JSON string below
json = "{}"
# create an instance of Events from a JSON string
events_instance = Events.from_json(json)
# print the JSON string representation of the object
print(Events.to_json())

# convert the object into a dict
events_dict = events_instance.to_dict()
# create an instance of Events from a dict
events_from_dict = Events.from_dict(events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


