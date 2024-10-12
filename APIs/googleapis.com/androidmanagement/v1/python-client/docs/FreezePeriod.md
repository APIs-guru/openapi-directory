# FreezePeriod

A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed.When the device is outside any set freeze periods, the normal policy behavior (automatic, windowed, or postponed) applies.Leap years are ignored in freeze period calculations, in particular: If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day.Note: For Freeze Periods to take effect, SystemUpdateType cannot be specified as SYSTEM_UPDATE_TYPE_UNSPECIFIED, because freeze periods require a defined policy to be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.freeze_period import FreezePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of FreezePeriod from a JSON string
freeze_period_instance = FreezePeriod.from_json(json)
# print the JSON string representation of the object
print(FreezePeriod.to_json())

# convert the object into a dict
freeze_period_dict = freeze_period_instance.to_dict()
# create an instance of FreezePeriod from a dict
freeze_period_from_dict = FreezePeriod.from_dict(freeze_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


