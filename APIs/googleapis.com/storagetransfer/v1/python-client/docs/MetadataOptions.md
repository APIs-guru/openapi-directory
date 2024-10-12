# MetadataOptions

Specifies the metadata options for running a transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl** | **str** | Specifies how each object&#39;s ACLs should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT. | [optional] 
**gid** | **str** | Specifies how each file&#39;s POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. | [optional] 
**kms_key** | **str** | Specifies how each object&#39;s Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as KMS_KEY_DESTINATION_BUCKET_DEFAULT. | [optional] 
**mode** | **str** | Specifies how each file&#39;s mode attribute should be handled by the transfer. By default, mode is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. | [optional] 
**storage_class** | **str** | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT. | [optional] 
**symlink** | **str** | Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. | [optional] 
**temporary_hold** | **str** | Specifies how each object&#39;s temporary hold status should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE. | [optional] 
**time_created** | **str** | Specifies how each object&#39;s &#x60;timeCreated&#x60; metadata is preserved for transfers. If unspecified, the default behavior is the same as TIME_CREATED_SKIP. | [optional] 
**uid** | **str** | Specifies how each file&#39;s POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. | [optional] 

## Example

```python
from openapi_client.models.metadata_options import MetadataOptions

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataOptions from a JSON string
metadata_options_instance = MetadataOptions.from_json(json)
# print the JSON string representation of the object
print(MetadataOptions.to_json())

# convert the object into a dict
metadata_options_dict = metadata_options_instance.to_dict()
# create an instance of MetadataOptions from a dict
metadata_options_from_dict = MetadataOptions.from_dict(metadata_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


