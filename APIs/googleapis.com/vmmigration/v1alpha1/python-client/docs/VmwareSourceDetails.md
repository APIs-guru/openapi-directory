# VmwareSourceDetails

VmwareSourceDetails message describes a specific source details for the vmware source type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Input only. The credentials password. This is write only and can not be read in a GET operation. | [optional] 
**resolved_vcenter_host** | **str** | The hostname of the vcenter. | [optional] 
**thumbprint** | **str** | The thumbprint representing the certificate for the vcenter. | [optional] 
**username** | **str** | The credentials username. | [optional] 
**vcenter_ip** | **str** | The ip address of the vcenter this Source represents. | [optional] 

## Example

```python
from openapi_client.models.vmware_source_details import VmwareSourceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareSourceDetails from a JSON string
vmware_source_details_instance = VmwareSourceDetails.from_json(json)
# print the JSON string representation of the object
print(VmwareSourceDetails.to_json())

# convert the object into a dict
vmware_source_details_dict = vmware_source_details_instance.to_dict()
# create an instance of VmwareSourceDetails from a dict
vmware_source_details_from_dict = VmwareSourceDetails.from_dict(vmware_source_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


