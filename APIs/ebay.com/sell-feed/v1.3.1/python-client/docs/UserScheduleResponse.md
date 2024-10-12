# UserScheduleResponse

The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **str** | The creation date of the schedule in hours based on the 24-hour Coordinated Universal Time (UTC) clock. | [optional] 
**feed_type** | **str** | The &lt;strong&gt;feedType&lt;/strong&gt; associated with the schedule. | [optional] 
**last_modified_date** | **str** | The date the schedule was last modified. | [optional] 
**preferred_trigger_day_of_month** | **int** | The preferred day of the month to trigger the schedule. This field can be used with &lt;strong&gt;preferredTriggerHour&lt;/strong&gt; for monthly schedules. The last day of the month is used for numbers larger than the number of days in the month. | [optional] 
**preferred_trigger_day_of_week** | **str** | The preferred day of the week to trigger the schedule. This field can be used with &lt;strong&gt;preferredTriggerHour&lt;/strong&gt; for weekly schedules. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**preferred_trigger_hour** | **str** | The preferred two-digit hour of the day to trigger the schedule. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format:&lt;/b&gt; UTC &lt;code&gt;hhZ&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;For example, the following represents 11:00 am UTC:&lt;br /&gt;&lt;br /&gt;&lt;code&gt;11Z&lt;/code&gt;&lt;br /&gt;&lt;br /&gt; | [optional] 
**schedule_end_date** | **str** | The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes &lt;code&gt;INACTIVE&lt;/code&gt;. | [optional] 
**schedule_id** | **str** | The ID of the schedule. This ID is generated when the schedule was created by the &lt;strong&gt;createSchedule&lt;/strong&gt; method. | [optional] 
**schedule_name** | **str** | The schedule name assigned by the user for the created schedule. Users assign this name for their reference. | [optional] 
**schedule_start_date** | **str** | The timestamp that indicates the start of the report generation. | [optional] 
**schedule_template_id** | **str** | The ID of the template used to create this schedule. | [optional] 
**schema_version** | **str** | The schema version of the feedType for the schedule. | [optional] 
**status** | **str** | The enumeration value that indicates the state of the schedule. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**status_reason** | **str** | The reason the schedule is inactive. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:StatusReasonEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.user_schedule_response import UserScheduleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserScheduleResponse from a JSON string
user_schedule_response_instance = UserScheduleResponse.from_json(json)
# print the JSON string representation of the object
print(UserScheduleResponse.to_json())

# convert the object into a dict
user_schedule_response_dict = user_schedule_response_instance.to_dict()
# create an instance of UserScheduleResponse from a dict
user_schedule_response_from_dict = UserScheduleResponse.from_dict(user_schedule_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


