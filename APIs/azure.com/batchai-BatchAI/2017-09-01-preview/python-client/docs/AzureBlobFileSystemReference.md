# AzureBlobFileSystemReference

Provides required information, for the service to be able to mount Azure Blob Storage container on the cluster nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** |  | 
**container_name** | **str** |  | 
**credentials** | [**AzureStorageCredentialsInfo**](AzureStorageCredentialsInfo.md) |  | 
**mount_options** | **str** |  | [optional] 
**relative_mount_path** | **str** | Note that all blob file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location. | 

## Example

```python
from openapi_client.models.azure_blob_file_system_reference import AzureBlobFileSystemReference

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobFileSystemReference from a JSON string
azure_blob_file_system_reference_instance = AzureBlobFileSystemReference.from_json(json)
# print the JSON string representation of the object
print(AzureBlobFileSystemReference.to_json())

# convert the object into a dict
azure_blob_file_system_reference_dict = azure_blob_file_system_reference_instance.to_dict()
# create an instance of AzureBlobFileSystemReference from a dict
azure_blob_file_system_reference_from_dict = AzureBlobFileSystemReference.from_dict(azure_blob_file_system_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


