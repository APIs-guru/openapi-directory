# VmUtilizationInfo

Utilization information of a single VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**utilization** | [**VmUtilizationMetrics**](VmUtilizationMetrics.md) |  | [optional] 
**vm_id** | **str** | The VM&#39;s ID in the source. | [optional] 
**vmware_vm_details** | [**VmwareVmDetails**](VmwareVmDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.vm_utilization_info import VmUtilizationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VmUtilizationInfo from a JSON string
vm_utilization_info_instance = VmUtilizationInfo.from_json(json)
# print the JSON string representation of the object
print(VmUtilizationInfo.to_json())

# convert the object into a dict
vm_utilization_info_dict = vm_utilization_info_instance.to_dict()
# create an instance of VmUtilizationInfo from a dict
vm_utilization_info_from_dict = VmUtilizationInfo.from_dict(vm_utilization_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


