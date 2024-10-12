# Schedule

The definition of a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time the schedule was created. | [optional] [readonly] 
**cron_schedule** | **str** | Cron-tab formatted schedule by which the job will execute. Format: minute, hour, day of month, month, day of week, e.g. &#x60;0 0 * * WED&#x60; &#x3D; every Wednesday More examples: https://crontab.guru/examples.html | [optional] 
**description** | **str** | A brief description of this environment. | [optional] 
**display_name** | **str** | Output only. Display name used for UI purposes. Name can only contain alphanumeric characters, hyphens &#x60;-&#x60;, and underscores &#x60;_&#x60;. | [optional] [readonly] 
**execution_template** | [**ExecutionTemplate**](ExecutionTemplate.md) |  | [optional] 
**name** | **str** | Output only. The name of this schedule. Format: &#x60;projects/{project_id}/locations/{location}/schedules/{schedule_id}&#x60; | [optional] [readonly] 
**recent_executions** | [**List[Execution]**](Execution.md) | Output only. The most recent execution names triggered from this schedule and their corresponding states. | [optional] [readonly] 
**state** | **str** |  | [optional] 
**time_zone** | **str** | Timezone on which the cron_schedule. The value of this field must be a time zone name from the tz database. TZ Database: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string \&quot;utc\&quot;. If a time zone is not specified, the default will be in UTC (also known as GMT). | [optional] 
**update_time** | **str** | Output only. Time the schedule was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.schedule import Schedule

# TODO update the JSON string below
json = "{}"
# create an instance of Schedule from a JSON string
schedule_instance = Schedule.from_json(json)
# print the JSON string representation of the object
print(Schedule.to_json())

# convert the object into a dict
schedule_dict = schedule_instance.to_dict()
# create an instance of Schedule from a dict
schedule_from_dict = Schedule.from_dict(schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


