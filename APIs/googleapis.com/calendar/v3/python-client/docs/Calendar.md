# Calendar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conference_properties** | [**ConferenceProperties**](ConferenceProperties.md) |  | [optional] 
**description** | **str** | Description of the calendar. Optional. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | Identifier of the calendar. To retrieve IDs call the calendarList.list() method. | [optional] 
**kind** | **str** | Type of the resource (\&quot;calendar#calendar\&quot;). | [optional] [default to 'calendar#calendar']
**location** | **str** | Geographic location of the calendar as free-form text. Optional. | [optional] 
**summary** | **str** | Title of the calendar. | [optional] 
**time_zone** | **str** | The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. \&quot;Europe/Zurich\&quot;.) Optional. | [optional] 

## Example

```python
from openapi_client.models.calendar import Calendar

# TODO update the JSON string below
json = "{}"
# create an instance of Calendar from a JSON string
calendar_instance = Calendar.from_json(json)
# print the JSON string representation of the object
print(Calendar.to_json())

# convert the object into a dict
calendar_dict = calendar_instance.to_dict()
# create an instance of Calendar from a dict
calendar_from_dict = Calendar.from_dict(calendar_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


