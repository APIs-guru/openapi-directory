# DiskEncryptionSet

disk encryption set resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**EncryptionSetIdentity**](EncryptionSetIdentity.md) |  | [optional] 
**properties** | [**EncryptionSetProperties**](EncryptionSetProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.disk_encryption_set import DiskEncryptionSet

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionSet from a JSON string
disk_encryption_set_instance = DiskEncryptionSet.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionSet.to_json())

# convert the object into a dict
disk_encryption_set_dict = disk_encryption_set_instance.to_dict()
# create an instance of DiskEncryptionSet from a dict
disk_encryption_set_from_dict = DiskEncryptionSet.from_dict(disk_encryption_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


