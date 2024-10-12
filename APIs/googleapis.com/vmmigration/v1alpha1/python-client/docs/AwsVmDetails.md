# AwsVmDetails

AwsVmDetails describes a VM in AWS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The CPU architecture. | [optional] 
**boot_option** | **str** | The VM Boot Option. | [optional] 
**committed_storage_mb** | **str** | The total size of the storage allocated to the VM in MB. | [optional] 
**cpu_count** | **int** | The number of cpus the VM has. | [optional] 
**disk_count** | **int** | The number of disks the VM has. | [optional] 
**display_name** | **str** | The display name of the VM. Note that this value is not necessarily unique. | [optional] 
**instance_type** | **str** | The instance type of the VM. | [optional] 
**memory_mb** | **int** | The memory size of the VM in MB. | [optional] 
**os_description** | **str** | The VM&#39;s OS. | [optional] 
**power_state** | **str** | Output only. The power state of the VM at the moment list was taken. | [optional] [readonly] 
**security_groups** | [**List[AwsSecurityGroup]**](AwsSecurityGroup.md) | The security groups the VM belongs to. | [optional] 
**source_description** | **str** | The descriptive name of the AWS&#39;s source this VM is connected to. | [optional] 
**source_id** | **str** | The id of the AWS&#39;s source this VM is connected to. | [optional] 
**tags** | **Dict[str, str]** | The tags of the VM. | [optional] 
**virtualization_type** | **str** | The virtualization type. | [optional] 
**vm_id** | **str** | The VM ID in AWS. | [optional] 
**vpc_id** | **str** | The VPC ID the VM belongs to. | [optional] 
**zone** | **str** | The AWS zone of the VM. | [optional] 

## Example

```python
from openapi_client.models.aws_vm_details import AwsVmDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AwsVmDetails from a JSON string
aws_vm_details_instance = AwsVmDetails.from_json(json)
# print the JSON string representation of the object
print(AwsVmDetails.to_json())

# convert the object into a dict
aws_vm_details_dict = aws_vm_details_instance.to_dict()
# create an instance of AwsVmDetails from a dict
aws_vm_details_from_dict = AwsVmDetails.from_dict(aws_vm_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


