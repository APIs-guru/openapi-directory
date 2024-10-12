# Machine

Machine REST resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the relative URL to get to this REST resource. | [optional] 
**name** | **str** | Gets or sets the name of this REST resource. | [optional] 
**properties** | [**MachineProperties**](MachineProperties.md) |  | [optional] 
**type** | **str** | Gets the type of this REST resource. | [optional] [readonly] 

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


