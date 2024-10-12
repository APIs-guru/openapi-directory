# OSDiskDetails

Details of the OS Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_type** | **str** | The type of the OS on the VM. | [optional] 
**os_vhd_id** | **str** | The id of the disk containing the OS. | [optional] 
**vhd_name** | **str** | The OS disk VHD name. | [optional] 

## Example

```python
from openapi_client.models.os_disk_details import OSDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OSDiskDetails from a JSON string
os_disk_details_instance = OSDiskDetails.from_json(json)
# print the JSON string representation of the object
print(OSDiskDetails.to_json())

# convert the object into a dict
os_disk_details_dict = os_disk_details_instance.to_dict()
# create an instance of OSDiskDetails from a dict
os_disk_details_from_dict = OSDiskDetails.from_dict(os_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


