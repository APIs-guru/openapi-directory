# Machine

A machine in a migration project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | For optimistic concurrency control. | [optional] 
**id** | **str** | Path reference to this machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/machines/{machineName} | [optional] [readonly] 
**name** | **str** | Name of the machine. It is a GUID which is unique identifier of machine in private data center. For user-readable name, we have a displayName property on this machine. | [optional] [readonly] 
**properties** | [**MachineProperties**](MachineProperties.md) |  | [optional] 
**type** | **str** | Type of the object &#x3D; [Microsoft.Migrate/projects/machines]. | [optional] [readonly] 

## Example

```python
from openapi_client.models.machine import Machine

# TODO update the JSON string below
json = "{}"
# create an instance of Machine from a JSON string
machine_instance = Machine.from_json(json)
# print the JSON string representation of the object
print(Machine.to_json())

# convert the object into a dict
machine_dict = machine_instance.to_dict()
# create an instance of Machine from a dict
machine_from_dict = Machine.from_dict(machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


