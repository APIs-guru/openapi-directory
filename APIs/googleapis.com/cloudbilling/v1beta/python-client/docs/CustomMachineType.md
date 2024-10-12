# CustomMachineType

Specification of a custom machine type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_series** | **str** | Required. The machine series. Only certain [machine series](https://cloud.google.com/compute/docs/general-purpose-machines#custom_machine_types) support custom configurations. For example: \&quot;n1\&quot;. | [optional] 
**memory_size_gb** | **float** | Required. Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB). Each [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison) has limitations on allowed values for the ratio of memory-to-vCPU count. | [optional] 
**virtual_cpu_count** | **str** | Required. The number of vCPUs. The allowed values depend on the [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison). | [optional] 

## Example

```python
from openapi_client.models.custom_machine_type import CustomMachineType

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMachineType from a JSON string
custom_machine_type_instance = CustomMachineType.from_json(json)
# print the JSON string representation of the object
print(CustomMachineType.to_json())

# convert the object into a dict
custom_machine_type_dict = custom_machine_type_instance.to_dict()
# create an instance of CustomMachineType from a dict
custom_machine_type_from_dict = CustomMachineType.from_dict(custom_machine_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


