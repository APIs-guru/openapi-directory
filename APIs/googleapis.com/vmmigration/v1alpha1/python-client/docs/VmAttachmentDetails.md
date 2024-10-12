# VmAttachmentDetails

Details for attachment of the disk to a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_name** | **str** | Optional. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. | [optional] 

## Example

```python
from openapi_client.models.vm_attachment_details import VmAttachmentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmAttachmentDetails from a JSON string
vm_attachment_details_instance = VmAttachmentDetails.from_json(json)
# print the JSON string representation of the object
print(VmAttachmentDetails.to_json())

# convert the object into a dict
vm_attachment_details_dict = vm_attachment_details_instance.to_dict()
# create an instance of VmAttachmentDetails from a dict
vm_attachment_details_from_dict = VmAttachmentDetails.from_dict(vm_attachment_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


