# VirtualDiskController

Virtual disk controller model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Controller&#39;s id | [optional] [readonly] 
**name** | **str** | The display name of Controller | [optional] [readonly] 
**sub_type** | **str** | dik controller subtype (VMWARE_PARAVIRTUAL, BUS_PARALLEL, LSI_PARALLEL, LSI_SAS) | [optional] [readonly] 
**type** | **str** | disk controller type (SCSI) | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_disk_controller import VirtualDiskController

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualDiskController from a JSON string
virtual_disk_controller_instance = VirtualDiskController.from_json(json)
# print the JSON string representation of the object
print(VirtualDiskController.to_json())

# convert the object into a dict
virtual_disk_controller_dict = virtual_disk_controller_instance.to_dict()
# create an instance of VirtualDiskController from a dict
virtual_disk_controller_from_dict = VirtualDiskController.from_dict(virtual_disk_controller_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


