# DayPartTargeting

Day Part Targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_of_week** | **List[str]** | Days of the week when the ad will serve. Acceptable values are: - \&quot;SUNDAY\&quot; - \&quot;MONDAY\&quot; - \&quot;TUESDAY\&quot; - \&quot;WEDNESDAY\&quot; - \&quot;THURSDAY\&quot; - \&quot;FRIDAY\&quot; - \&quot;SATURDAY\&quot;  | [optional] 
**hours_of_day** | **List[int]** | Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive. | [optional] 
**user_local_time** | **bool** | Whether or not to use the user&#39;s local time. If false, the America/New York time zone applies. | [optional] 

## Example

```python
from openapi_client.models.day_part_targeting import DayPartTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of DayPartTargeting from a JSON string
day_part_targeting_instance = DayPartTargeting.from_json(json)
# print the JSON string representation of the object
print(DayPartTargeting.to_json())

# convert the object into a dict
day_part_targeting_dict = day_part_targeting_instance.to_dict()
# create an instance of DayPartTargeting from a dict
day_part_targeting_from_dict = DayPartTargeting.from_dict(day_part_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


