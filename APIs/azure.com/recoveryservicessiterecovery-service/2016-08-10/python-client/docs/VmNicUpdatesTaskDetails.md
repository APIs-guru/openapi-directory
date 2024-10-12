# VmNicUpdatesTaskDetails

This class represents the vm NicUpdates task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Nic. | [optional] 
**nic_id** | **str** | Nic Id. | [optional] 
**vm_id** | **str** | Virtual machine Id. | [optional] 

## Example

```python
from openapi_client.models.vm_nic_updates_task_details import VmNicUpdatesTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmNicUpdatesTaskDetails from a JSON string
vm_nic_updates_task_details_instance = VmNicUpdatesTaskDetails.from_json(json)
# print the JSON string representation of the object
print(VmNicUpdatesTaskDetails.to_json())

# convert the object into a dict
vm_nic_updates_task_details_dict = vm_nic_updates_task_details_instance.to_dict()
# create an instance of VmNicUpdatesTaskDetails from a dict
vm_nic_updates_task_details_from_dict = VmNicUpdatesTaskDetails.from_dict(vm_nic_updates_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


