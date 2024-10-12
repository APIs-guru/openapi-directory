# GoogleAppsCardV1DateTimePicker

Lets users input a date, a time, or both a date and a time. For an example in Google Chat apps, see [Date time picker](https://developers.google.com/chat/ui/widgets/date-time-picker). Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as &#x60;Appointment date&#x60; or &#x60;Appointment date and time&#x60;. | [optional] 
**name** | **str** | The name by which the &#x60;DateTimePicker&#x60; is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). | [optional] 
**on_change_action** | [**GoogleAppsCardV1Action**](GoogleAppsCardV1Action.md) |  | [optional] 
**timezone_offset_date** | **int** | The number representing the time zone offset from UTC, in minutes. If set, the &#x60;value_ms_epoch&#x60; is displayed in the specified time zone. If unset, the value defaults to the user&#39;s time zone setting. | [optional] 
**type** | **str** | Whether the widget supports inputting a date, a time, or the date and time. | [optional] 
**value_ms_epoch** | **str** | The default value displayed in the widget, in milliseconds since [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time). Specify the value based on the type of picker (&#x60;DateTimePickerType&#x60;): * &#x60;DATE_AND_TIME&#x60;: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use &#x60;1672574400000&#x60;. * &#x60;DATE_ONLY&#x60;: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use &#x60;1672531200000&#x60;. * &#x60;TIME_ONLY&#x60;: a time in UTC. For example, to represent 12:00 PM, use &#x60;43200000&#x60; (or &#x60;12 * 60 * 60 * 1000&#x60;). | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_date_time_picker import GoogleAppsCardV1DateTimePicker

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1DateTimePicker from a JSON string
google_apps_card_v1_date_time_picker_instance = GoogleAppsCardV1DateTimePicker.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1DateTimePicker.to_json())

# convert the object into a dict
google_apps_card_v1_date_time_picker_dict = google_apps_card_v1_date_time_picker_instance.to_dict()
# create an instance of GoogleAppsCardV1DateTimePicker from a dict
google_apps_card_v1_date_time_picker_from_dict = GoogleAppsCardV1DateTimePicker.from_dict(google_apps_card_v1_date_time_picker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


