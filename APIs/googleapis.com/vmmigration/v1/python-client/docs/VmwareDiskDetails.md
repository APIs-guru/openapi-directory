# VmwareDiskDetails

The details of a Vmware VM disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_number** | **int** | The ordinal number of the disk. | [optional] 
**label** | **str** | The disk label. | [optional] 
**size_gb** | **str** | Size in GB. | [optional] 

## Example

```python
from openapi_client.models.vmware_disk_details import VmwareDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareDiskDetails from a JSON string
vmware_disk_details_instance = VmwareDiskDetails.from_json(json)
# print the JSON string representation of the object
print(VmwareDiskDetails.to_json())

# convert the object into a dict
vmware_disk_details_dict = vmware_disk_details_instance.to_dict()
# create an instance of VmwareDiskDetails from a dict
vmware_disk_details_from_dict = VmwareDiskDetails.from_dict(vmware_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


