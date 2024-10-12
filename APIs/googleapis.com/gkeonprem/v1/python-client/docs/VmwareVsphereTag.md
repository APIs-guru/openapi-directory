# VmwareVsphereTag

VmwareVsphereTag describes a vSphere tag to be placed on VMs in the node pool. For more information, see https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-E8E854DD-AA97-4E0C-8419-CE84F93C4058.html

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The Vsphere tag category. | [optional] 
**tag** | **str** | The Vsphere tag name. | [optional] 

## Example

```python
from openapi_client.models.vmware_vsphere_tag import VmwareVsphereTag

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareVsphereTag from a JSON string
vmware_vsphere_tag_instance = VmwareVsphereTag.from_json(json)
# print the JSON string representation of the object
print(VmwareVsphereTag.to_json())

# convert the object into a dict
vmware_vsphere_tag_dict = vmware_vsphere_tag_instance.to_dict()
# create an instance of VmwareVsphereTag from a dict
vmware_vsphere_tag_from_dict = VmwareVsphereTag.from_dict(vmware_vsphere_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


