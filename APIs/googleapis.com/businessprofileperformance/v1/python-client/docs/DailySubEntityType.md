# DailySubEntityType

Represents all possible subentity types that are associated with DailyMetrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics &#x3D; NONE. | [optional] 
**time_of_day** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.daily_sub_entity_type import DailySubEntityType

# TODO update the JSON string below
json = "{}"
# create an instance of DailySubEntityType from a JSON string
daily_sub_entity_type_instance = DailySubEntityType.from_json(json)
# print the JSON string representation of the object
print(DailySubEntityType.to_json())

# convert the object into a dict
daily_sub_entity_type_dict = daily_sub_entity_type_instance.to_dict()
# create an instance of DailySubEntityType from a dict
daily_sub_entity_type_from_dict = DailySubEntityType.from_dict(daily_sub_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


