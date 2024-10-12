# MachinePreferences

The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_machine_series** | [**List[MachineSeries]**](MachineSeries.md) | Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series. | [optional] 

## Example

```python
from openapi_client.models.machine_preferences import MachinePreferences

# TODO update the JSON string below
json = "{}"
# create an instance of MachinePreferences from a JSON string
machine_preferences_instance = MachinePreferences.from_json(json)
# print the JSON string representation of the object
print(MachinePreferences.to_json())

# convert the object into a dict
machine_preferences_dict = machine_preferences_instance.to_dict()
# create an instance of MachinePreferences from a dict
machine_preferences_from_dict = MachinePreferences.from_dict(machine_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


