# DiskEncryptionStatus

Disk encryption status for an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#diskEncryptionStatus&#x60;. | [optional] 
**kms_key_version_name** | **str** | KMS key version used to encrypt the Cloud SQL instance resource | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_status import DiskEncryptionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionStatus from a JSON string
disk_encryption_status_instance = DiskEncryptionStatus.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionStatus.to_json())

# convert the object into a dict
disk_encryption_status_dict = disk_encryption_status_instance.to_dict()
# create an instance of DiskEncryptionStatus from a dict
disk_encryption_status_from_dict = DiskEncryptionStatus.from_dict(disk_encryption_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


