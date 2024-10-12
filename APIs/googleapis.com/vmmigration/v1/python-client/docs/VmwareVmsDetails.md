# VmwareVmsDetails

VmwareVmsDetails describes VMs in vCenter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**List[VmwareVmDetails]**](VmwareVmDetails.md) | The details of the vmware VMs. | [optional] 

## Example

```python
from openapi_client.models.vmware_vms_details import VmwareVmsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareVmsDetails from a JSON string
vmware_vms_details_instance = VmwareVmsDetails.from_json(json)
# print the JSON string representation of the object
print(VmwareVmsDetails.to_json())

# convert the object into a dict
vmware_vms_details_dict = vmware_vms_details_instance.to_dict()
# create an instance of VmwareVmsDetails from a dict
vmware_vms_details_from_dict = VmwareVmsDetails.from_dict(vmware_vms_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


