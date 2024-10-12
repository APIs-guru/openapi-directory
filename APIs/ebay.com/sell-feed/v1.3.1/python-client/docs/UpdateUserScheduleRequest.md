# UpdateUserScheduleRequest

The type that defines the fields for a schedule update to a schedule generated with the Feed API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferred_trigger_day_of_month** | **int** | The preferred day of the month to trigger the schedule. This field can be used with &lt;strong&gt;preferredTriggerHour&lt;/strong&gt; for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. &lt;br /&gt;&lt;br /&gt;This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Minimum: &lt;/b&gt;1&lt;b&gt;&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum: &lt;/b&gt;31 | [optional] 
**preferred_trigger_day_of_week** | **str** | The preferred day of the week to trigger the schedule. This field can be used with &lt;strong&gt;preferredTriggerHour&lt;/strong&gt; for weekly schedules. &lt;br /&gt;&lt;br /&gt;This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**preferred_trigger_hour** | **str** | The preferred two-digit hour of the day to trigger the schedule. &lt;br /&gt;&lt;br /&gt;This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format:&lt;/b&gt; UTC &lt;code&gt;hhZ&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;For example, the following represents 11:00 am UTC:&lt;code&gt; 11Z&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Minimum: &lt;/b&gt;&lt;code&gt;00Z&lt;/code&gt;&lt;b&gt;&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum: &lt;/b&gt;&lt;code&gt;23Z&lt;/code&gt; | [optional] 
**schedule_end_date** | **str** | The timestamp on which the schedule (report generation) ends. After this date, the schedule status becomes &lt;code&gt;INACTIVE&lt;/code&gt;. &lt;br /&gt;&lt;br /&gt;Use this field, if available, to end the schedule in the future. This value must be later than &lt;strong&gt;scheduleStartDate&lt;/strong&gt; (if supplied). This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format:&lt;/b&gt; UTC &lt;code&gt;yyyy-MM-dd&lt;strong&gt;T&lt;/strong&gt;HH&lt;strong&gt;Z&lt;/strong&gt;&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;For example, the following represents UTC October 10, 2021 at 10:00 AM:&lt;br /&gt;&lt;code&gt; 2021-10-10T10Z&lt;/code&gt; | [optional] 
**schedule_name** | **str** | The schedule name assigned by the user for the created schedule. | [optional] 
**schedule_start_date** | **str** | The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the &lt;strong&gt;scheduleEndDate&lt;/strong&gt; occurs or the &lt;strong&gt;scheduleTemplateId&lt;/strong&gt; becomes inactive. &lt;br /&gt;&lt;br /&gt;Use this field, if available, to start the schedule in the future but before the &lt;strong&gt;scheduleEndDate&lt;/strong&gt; (if supplied). This field is available as specified by the template &lt;strong&gt;(scheduleTemplateId)&lt;/strong&gt;.  The template can specify this field as optional or required, and optionally provides a default value.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format:&lt;/b&gt; UTC &lt;code&gt;yyyy-MM-dd&lt;strong&gt;T&lt;/strong&gt;HH&lt;strong&gt;Z&lt;/strong&gt;&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM:&lt;br /&gt;&lt;code&gt; 2020-01-01T12Z&lt;/code&gt; | [optional] 
**schema_version** | **str** | The schema version of the feedType for the schedule. This field is required if the &lt;strong&gt;feedType&lt;/strong&gt; has a schema version. &lt;br /&gt;&lt;br /&gt;This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value. | [optional] 

## Example

```python
from openapi_client.models.update_user_schedule_request import UpdateUserScheduleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserScheduleRequest from a JSON string
update_user_schedule_request_instance = UpdateUserScheduleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateUserScheduleRequest.to_json())

# convert the object into a dict
update_user_schedule_request_dict = update_user_schedule_request_instance.to_dict()
# create an instance of UpdateUserScheduleRequest from a dict
update_user_schedule_request_from_dict = UpdateUserScheduleRequest.from_dict(update_user_schedule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


