# OSPolicyResourceFileResource

A resource that manages the state of a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | A a file with this content. The size of the content is limited to 32KiB. | [optional] 
**file** | [**OSPolicyResourceFile**](OSPolicyResourceFile.md) |  | [optional] 
**path** | **str** | Required. The absolute path of the file within the VM. | [optional] 
**permissions** | **str** | Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 | [optional] 
**state** | **str** | Required. Desired state of the file. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_file_resource import OSPolicyResourceFileResource

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceFileResource from a JSON string
os_policy_resource_file_resource_instance = OSPolicyResourceFileResource.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceFileResource.to_json())

# convert the object into a dict
os_policy_resource_file_resource_dict = os_policy_resource_file_resource_instance.to_dict()
# create an instance of OSPolicyResourceFileResource from a dict
os_policy_resource_file_resource_from_dict = OSPolicyResourceFileResource.from_dict(os_policy_resource_file_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


