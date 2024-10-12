# WeeklyRetentionFormat

Weekly retention format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_of_the_week** | **List[str]** | List of days of the week. | [optional] 
**weeks_of_the_month** | **List[str]** | List of weeks of month. | [optional] 

## Example

```python
from openapi_client.models.weekly_retention_format import WeeklyRetentionFormat

# TODO update the JSON string below
json = "{}"
# create an instance of WeeklyRetentionFormat from a JSON string
weekly_retention_format_instance = WeeklyRetentionFormat.from_json(json)
# print the JSON string representation of the object
print(WeeklyRetentionFormat.to_json())

# convert the object into a dict
weekly_retention_format_dict = weekly_retention_format_instance.to_dict()
# create an instance of WeeklyRetentionFormat from a dict
weekly_retention_format_from_dict = WeeklyRetentionFormat.from_dict(weekly_retention_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


