# WeeklyCycle

Time window specified for weekly operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**List[Schedule]**](Schedule.md) | User can specify multiple windows in a week. Minimum of 1 window. | [optional] 

## Example

```python
from openapi_client.models.weekly_cycle import WeeklyCycle

# TODO update the JSON string below
json = "{}"
# create an instance of WeeklyCycle from a JSON string
weekly_cycle_instance = WeeklyCycle.from_json(json)
# print the JSON string representation of the object
print(WeeklyCycle.to_json())

# convert the object into a dict
weekly_cycle_dict = weekly_cycle_instance.to_dict()
# create an instance of WeeklyCycle from a dict
weekly_cycle_from_dict = WeeklyCycle.from_dict(weekly_cycle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


