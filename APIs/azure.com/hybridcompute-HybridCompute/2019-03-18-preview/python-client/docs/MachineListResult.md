# MachineListResult

The List hybrid machine operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of VMs. Call ListNext() with this URI to fetch the next page of hybrid machines. | [optional] 
**value** | [**List[Machine]**](Machine.md) | The list of hybrid machines. | 

## Example

```python
from openapi_client.models.machine_list_result import MachineListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MachineListResult from a JSON string
machine_list_result_instance = MachineListResult.from_json(json)
# print the JSON string representation of the object
print(MachineListResult.to_json())

# convert the object into a dict
machine_list_result_dict = machine_list_result_instance.to_dict()
# create an instance of MachineListResult from a dict
machine_list_result_from_dict = MachineListResult.from_dict(machine_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


