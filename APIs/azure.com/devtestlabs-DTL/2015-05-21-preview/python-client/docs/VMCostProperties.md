# VMCostProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**resource_group_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.vm_cost_properties import VMCostProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VMCostProperties from a JSON string
vm_cost_properties_instance = VMCostProperties.from_json(json)
# print the JSON string representation of the object
print(VMCostProperties.to_json())

# convert the object into a dict
vm_cost_properties_dict = vm_cost_properties_instance.to_dict()
# create an instance of VMCostProperties from a dict
vm_cost_properties_from_dict = VMCostProperties.from_dict(vm_cost_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


