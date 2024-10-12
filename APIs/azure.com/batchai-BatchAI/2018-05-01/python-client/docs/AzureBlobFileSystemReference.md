# AzureBlobFileSystemReference

Azure Blob Storage Container mounting configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Name of the Azure storage account. | 
**container_name** | **str** | Name of the Azure Blob Storage container to mount on the cluster. | 
**credentials** | [**AzureStorageCredentialsInfo**](AzureStorageCredentialsInfo.md) |  | 
**mount_options** | **str** | Mount options for mounting blobfuse file system. | [optional] 
**relative_mount_path** | **str** | The relative path on the compute node where the Azure File container will be mounted. Note that all cluster level containers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level containers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT. | 

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


