# ReportSchedule

The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not \"TODAY\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the schedule is active or not. Must be set to either true or false. | [optional] 
**every** | **int** | Defines every how many days, weeks or months the report should be run. Needs to be set when \&quot;repeats\&quot; is either \&quot;DAILY\&quot;, \&quot;WEEKLY\&quot; or \&quot;MONTHLY\&quot;. | [optional] 
**expiration_date** | **date** |  | [optional] 
**repeats** | **str** | The interval for which the report is repeated. Note: - \&quot;DAILY\&quot; also requires field \&quot;every\&quot; to be set. - \&quot;WEEKLY\&quot; also requires fields \&quot;every\&quot; and \&quot;repeatsOnWeekDays\&quot; to be set. - \&quot;MONTHLY\&quot; also requires fields \&quot;every\&quot; and \&quot;runsOnDayOfMonth\&quot; to be set.  | [optional] 
**repeats_on_week_days** | **List[str]** | List of week days \&quot;WEEKLY\&quot; on which scheduled reports should run. | [optional] 
**runs_on_day_of_month** | **str** | Enum to define for \&quot;MONTHLY\&quot; scheduled reports whether reports should be repeated on the same day of the month as \&quot;startDate\&quot; or the same day of the week of the month. Example: If &#39;startDate&#39; is Monday, April 2nd 2012 (2012-04-02), \&quot;DAY_OF_MONTH\&quot; would run subsequent reports on the 2nd of every Month, and \&quot;WEEK_OF_MONTH\&quot; would run subsequent reports on the first Monday of the month. | [optional] 
**start_date** | **date** |  | [optional] 

## Example

```python
from openapi_client.models.report_schedule import ReportSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSchedule from a JSON string
report_schedule_instance = ReportSchedule.from_json(json)
# print the JSON string representation of the object
print(ReportSchedule.to_json())

# convert the object into a dict
report_schedule_dict = report_schedule_instance.to_dict()
# create an instance of ReportSchedule from a dict
report_schedule_from_dict = ReportSchedule.from_dict(report_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


