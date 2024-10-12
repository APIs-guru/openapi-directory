# MachineUpdate

Describes a hybrid machine Update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**Identity**](Identity.md) |  | [optional] 
**properties** | [**MachineUpdateProperties**](MachineUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.machine_update import MachineUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MachineUpdate from a JSON string
machine_update_instance = MachineUpdate.from_json(json)
# print the JSON string representation of the object
print(MachineUpdate.to_json())

# convert the object into a dict
machine_update_dict = machine_update_instance.to_dict()
# create an instance of MachineUpdate from a dict
machine_update_from_dict = MachineUpdate.from_dict(machine_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


