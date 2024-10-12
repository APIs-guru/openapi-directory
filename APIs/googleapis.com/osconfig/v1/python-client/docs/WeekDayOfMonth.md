# WeekDayOfMonth

Represents one week day in a month. An example is \"the 4th Sunday\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Required. A day of the week. | [optional] 
**day_offset** | **int** | Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if &#x60;week_ordinal&#x60; and &#x60;day_of_week&#x60; values point to the second Tuesday of the month and the &#x60;day_offset&#x60; value is set to &#x60;3&#x60;, patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, patches are deployed five days before the second Tuesday of the month. Allowed values are in range [-30, 30]. | [optional] 
**week_ordinal** | **int** | Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month. | [optional] 

## Example

```python
from openapi_client.models.week_day_of_month import WeekDayOfMonth

# TODO update the JSON string below
json = "{}"
# create an instance of WeekDayOfMonth from a JSON string
week_day_of_month_instance = WeekDayOfMonth.from_json(json)
# print the JSON string representation of the object
print(WeekDayOfMonth.to_json())

# convert the object into a dict
week_day_of_month_dict = week_day_of_month_instance.to_dict()
# create an instance of WeekDayOfMonth from a dict
week_day_of_month_from_dict = WeekDayOfMonth.from_dict(week_day_of_month_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


