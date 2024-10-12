# NestedVirtualMachine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_virtual_machine import NestedVirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of NestedVirtualMachine from a JSON string
nested_virtual_machine_instance = NestedVirtualMachine.from_json(json)
# print the JSON string representation of the object
print(NestedVirtualMachine.to_json())

# convert the object into a dict
nested_virtual_machine_dict = nested_virtual_machine_instance.to_dict()
# create an instance of NestedVirtualMachine from a dict
nested_virtual_machine_from_dict = NestedVirtualMachine.from_dict(nested_virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


