# PowerManagementEvent

A power management event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**battery_level** | **float** | For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage. | [optional] 
**create_time** | **str** | The creation time of the event. | [optional] 
**event_type** | **str** | Event type. | [optional] 

## Example

```python
from openapi_client.models.power_management_event import PowerManagementEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PowerManagementEvent from a JSON string
power_management_event_instance = PowerManagementEvent.from_json(json)
# print the JSON string representation of the object
print(PowerManagementEvent.to_json())

# convert the object into a dict
power_management_event_dict = power_management_event_instance.to_dict()
# create an instance of PowerManagementEvent from a dict
power_management_event_from_dict = PowerManagementEvent.from_dict(power_management_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


