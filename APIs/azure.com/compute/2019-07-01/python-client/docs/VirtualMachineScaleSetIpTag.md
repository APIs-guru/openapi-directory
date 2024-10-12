# VirtualMachineScaleSetIpTag

Contains the IP tag associated with the public IP address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_tag_type** | **str** | IP tag type. Example: FirstPartyUsage. | [optional] 
**tag** | **str** | IP tag associated with the public IP. Example: SQL, Storage etc. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_ip_tag import VirtualMachineScaleSetIpTag

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetIpTag from a JSON string
virtual_machine_scale_set_ip_tag_instance = VirtualMachineScaleSetIpTag.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetIpTag.to_json())

# convert the object into a dict
virtual_machine_scale_set_ip_tag_dict = virtual_machine_scale_set_ip_tag_instance.to_dict()
# create an instance of VirtualMachineScaleSetIpTag from a dict
virtual_machine_scale_set_ip_tag_from_dict = VirtualMachineScaleSetIpTag.from_dict(virtual_machine_scale_set_ip_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


