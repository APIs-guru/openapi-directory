# DailyCycle

Time window specified for daily operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Output only. Duration of the time window, set by service producer. | [optional] 
**start_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.daily_cycle import DailyCycle

# TODO update the JSON string below
json = "{}"
# create an instance of DailyCycle from a JSON string
daily_cycle_instance = DailyCycle.from_json(json)
# print the JSON string representation of the object
print(DailyCycle.to_json())

# convert the object into a dict
daily_cycle_dict = daily_cycle_instance.to_dict()
# create an instance of DailyCycle from a dict
daily_cycle_from_dict = DailyCycle.from_dict(daily_cycle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


