# CreateUserScheduleRequest

The type that defines the fields for the <strong>createSchedule</strong> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed_type** | **str** | The name of the feed type for the created schedule. Match the &lt;strong&gt;feed_type&lt;/strong&gt; from the schedule template associated with this schedule. | [optional] 
**preferred_trigger_day_of_month** | **int** | The preferred day of the month to trigger the schedule. This field can be used with &lt;strong&gt;preferredTriggerHour&lt;/strong&gt; for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. &lt;br /&gt;&lt;br /&gt;This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Minimum: &lt;/b&gt;1&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum: &lt;/b&gt;31 | [optional] 
**preferred_trigger_day_of_week** | **str** | The preferred day of the week to trigger the schedule. This field can be used with &lt;strong&gt;preferredTriggerHour&lt;/strong&gt; for weekly schedules. &lt;br /&gt;&lt;br /&gt;This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**preferred_trigger_hour** | **str** | The preferred two-digit hour of the day to trigger the schedule. &lt;br /&gt;&lt;br /&gt;This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format:&lt;/b&gt; UTC &lt;code&gt;hhZ&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;For example, the following represents 11:00 am UTC:&lt;code&gt; 11Z&lt;/code&gt; | [optional] 
**schedule_end_date** | **str** | The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes &lt;code&gt;INACTIVE&lt;/code&gt;. &lt;br /&gt;&lt;br /&gt;Use this field, if available, to end the schedule in the future. This value must be later than &lt;strong&gt;scheduleStartDate&lt;/strong&gt; (if supplied). This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format:&lt;/b&gt; UTC &lt;code&gt;yyyy-MM-dd&lt;strong&gt;T&lt;/strong&gt;HH&lt;strong&gt;Z&lt;/strong&gt;&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;For example, the following represents UTC October 10, 2021 at 10:00 AM:&lt;br /&gt;&lt;code&gt;2021-10-10T10Z&lt;/code&gt; | [optional] 
**schedule_name** | **str** | The schedule name assigned by the user for the created schedule. | [optional] 
**schedule_start_date** | **str** | The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the &lt;strong&gt;scheduleEndDate&lt;/strong&gt; occurs or the &lt;strong&gt;scheduleTemplateId&lt;/strong&gt; becomes inactive. &lt;br /&gt;&lt;br /&gt;Use this field, if available, to start the schedule in the future but before the &lt;strong&gt;scheduleEndDate&lt;/strong&gt; (if supplied). This field is available as specified by the template &lt;strong&gt;(scheduleTemplateId)&lt;/strong&gt;.  The template can specify this field as optional or required, and optionally provides a default value.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format:&lt;/b&gt; UTC &lt;code&gt;yyyy-MM-dd&lt;strong&gt;T&lt;/strong&gt;HH&lt;strong&gt;Z&lt;/strong&gt;&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM:&lt;br /&gt;&lt;code&gt; 2020-01-01T12Z&lt;/code&gt; | [optional] 
**schedule_template_id** | **str** | The ID of the template associated with the schedule ID. You can get this ID from the documentation or by calling the &lt;strong&gt;getScheduleTemplates&lt;/strong&gt; method. This method requires a schedule template ID that is &lt;code&gt;ACTIVE&lt;/code&gt;. | [optional] 
**schema_version** | **str** | The schema version of the schedule feedType. This field is required if the &lt;strong&gt;feedType&lt;/strong&gt; has a schema version.&lt;br /&gt;&lt;br /&gt;This field is available as specified by the template (&lt;strong&gt;scheduleTemplateId&lt;/strong&gt;). The template can specify this field as optional or required, and optionally provides a default value. | [optional] 

## Example

```python
from openapi_client.models.create_user_schedule_request import CreateUserScheduleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUserScheduleRequest from a JSON string
create_user_schedule_request_instance = CreateUserScheduleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUserScheduleRequest.to_json())

# convert the object into a dict
create_user_schedule_request_dict = create_user_schedule_request_instance.to_dict()
# create an instance of CreateUserScheduleRequest from a dict
create_user_schedule_request_from_dict = CreateUserScheduleRequest.from_dict(create_user_schedule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


