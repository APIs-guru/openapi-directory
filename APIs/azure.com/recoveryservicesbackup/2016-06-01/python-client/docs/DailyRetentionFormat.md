# DailyRetentionFormat

Daily retention format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_of_the_month** | [**List[Day]**](Day.md) | List of days of the month. | [optional] 

## Example

```python
from openapi_client.models.daily_retention_format import DailyRetentionFormat

# TODO update the JSON string below
json = "{}"
# create an instance of DailyRetentionFormat from a JSON string
daily_retention_format_instance = DailyRetentionFormat.from_json(json)
# print the JSON string representation of the object
print(DailyRetentionFormat.to_json())

# convert the object into a dict
daily_retention_format_dict = daily_retention_format_instance.to_dict()
# create an instance of DailyRetentionFormat from a dict
daily_retention_format_from_dict = DailyRetentionFormat.from_dict(daily_retention_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


