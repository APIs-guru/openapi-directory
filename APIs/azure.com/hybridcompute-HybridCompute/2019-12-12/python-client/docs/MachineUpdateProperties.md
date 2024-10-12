# MachineUpdateProperties

Describes the ARM updatable properties of a hybrid machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_data** | [**MachinePropertiesLocationData**](MachinePropertiesLocationData.md) |  | [optional] 

## Example

```python
from openapi_client.models.machine_update_properties import MachineUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MachineUpdateProperties from a JSON string
machine_update_properties_instance = MachineUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(MachineUpdateProperties.to_json())

# convert the object into a dict
machine_update_properties_dict = machine_update_properties_instance.to_dict()
# create an instance of MachineUpdateProperties from a dict
machine_update_properties_from_dict = MachineUpdateProperties.from_dict(machine_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


