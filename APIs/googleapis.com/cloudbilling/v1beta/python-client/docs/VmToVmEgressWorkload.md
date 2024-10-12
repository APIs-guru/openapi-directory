# VmToVmEgressWorkload

Specify VM to VM data transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inter_region_egress** | [**InterRegionEgress**](InterRegionEgress.md) |  | [optional] 
**intra_region_egress** | [**IntraRegionEgress**](IntraRegionEgress.md) |  | [optional] 

## Example

```python
from openapi_client.models.vm_to_vm_egress_workload import VmToVmEgressWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of VmToVmEgressWorkload from a JSON string
vm_to_vm_egress_workload_instance = VmToVmEgressWorkload.from_json(json)
# print the JSON string representation of the object
print(VmToVmEgressWorkload.to_json())

# convert the object into a dict
vm_to_vm_egress_workload_dict = vm_to_vm_egress_workload_instance.to_dict()
# create an instance of VmToVmEgressWorkload from a dict
vm_to_vm_egress_workload_from_dict = VmToVmEgressWorkload.from_dict(vm_to_vm_egress_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


