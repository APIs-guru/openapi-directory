# MonthlySchedule

Represents a monthly schedule. An example of a valid monthly schedule is \"on the third Tuesday of the month\" or \"on the 15th of the month\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**month_day** | **int** | Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run \&quot;every month on the 31st\&quot; will not run in February, April, June, etc. | [optional] 
**week_day_of_month** | [**WeekDayOfMonth**](WeekDayOfMonth.md) |  | [optional] 

## Example

```python
from openapi_client.models.monthly_schedule import MonthlySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of MonthlySchedule from a JSON string
monthly_schedule_instance = MonthlySchedule.from_json(json)
# print the JSON string representation of the object
print(MonthlySchedule.to_json())

# convert the object into a dict
monthly_schedule_dict = monthly_schedule_instance.to_dict()
# create an instance of MonthlySchedule from a dict
monthly_schedule_from_dict = MonthlySchedule.from_dict(monthly_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


