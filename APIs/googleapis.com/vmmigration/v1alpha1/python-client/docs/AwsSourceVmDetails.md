# AwsSourceVmDetails

Represent the source AWS VM details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**committed_storage_bytes** | **str** | The total size of the disks being migrated in bytes. | [optional] 
**disks** | [**List[AwsDiskDetails]**](AwsDiskDetails.md) | The disks attached to the source VM. | [optional] 
**firmware** | **str** | The firmware type of the source VM. | [optional] 
**vm_capabilities_info** | [**VmCapabilities**](VmCapabilities.md) |  | [optional] 

## Example

```python
from openapi_client.models.aws_source_vm_details import AwsSourceVmDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AwsSourceVmDetails from a JSON string
aws_source_vm_details_instance = AwsSourceVmDetails.from_json(json)
# print the JSON string representation of the object
print(AwsSourceVmDetails.to_json())

# convert the object into a dict
aws_source_vm_details_dict = aws_source_vm_details_instance.to_dict()
# create an instance of AwsSourceVmDetails from a dict
aws_source_vm_details_from_dict = AwsSourceVmDetails.from_dict(aws_source_vm_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


