# MachineResultList

List of machines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** |  | [optional] 
**value** | [**List[Machine]**](Machine.md) | List of machines. | [optional] 

## Example

```python
from openapi_client.models.machine_result_list import MachineResultList

# TODO update the JSON string below
json = "{}"
# create an instance of MachineResultList from a JSON string
machine_result_list_instance = MachineResultList.from_json(json)
# print the JSON string representation of the object
print(MachineResultList.to_json())

# convert the object into a dict
machine_result_list_dict = machine_result_list_instance.to_dict()
# create an instance of MachineResultList from a dict
machine_result_list_from_dict = MachineResultList.from_dict(machine_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


