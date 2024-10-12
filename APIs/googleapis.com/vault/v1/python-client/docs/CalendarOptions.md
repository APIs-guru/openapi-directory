# CalendarOptions

Additional options for Calendar search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_query** | **List[str]** | Matches only those events whose location contains all of the words in the given set. If the string contains quoted phrases, this method only matches those events whose location contain the exact phrase. Entries in the set are considered in \&quot;and\&quot;. Word splitting example: [\&quot;New Zealand\&quot;] vs [\&quot;New\&quot;,\&quot;Zealand\&quot;] \&quot;New Zealand\&quot;: matched by both \&quot;New and better Zealand\&quot;: only matched by the later | [optional] 
**minus_words** | **List[str]** | Matches only those events that do not contain any of the words in the given set in title, description, location, or attendees. Entries in the set are considered in \&quot;or\&quot;. | [optional] 
**people_query** | **List[str]** | Matches only those events whose attendees contain all of the words in the given set. Entries in the set are considered in \&quot;and\&quot;. | [optional] 
**response_statuses** | **List[str]** | Matches only events for which the custodian gave one of these responses. If the set is empty or contains ATTENDEE_RESPONSE_UNSPECIFIED there will be no filtering on responses. | [optional] 
**version_date** | **str** | Search the current version of the Calendar event, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC. | [optional] 

## Example

```python
from openapi_client.models.calendar_options import CalendarOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarOptions from a JSON string
calendar_options_instance = CalendarOptions.from_json(json)
# print the JSON string representation of the object
print(CalendarOptions.to_json())

# convert the object into a dict
calendar_options_dict = calendar_options_instance.to_dict()
# create an instance of CalendarOptions from a dict
calendar_options_from_dict = CalendarOptions.from_dict(calendar_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


