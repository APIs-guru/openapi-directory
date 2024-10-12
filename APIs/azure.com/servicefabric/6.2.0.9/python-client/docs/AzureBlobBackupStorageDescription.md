# AzureBlobBackupStorageDescription

Describes the parameters for Azure blob store used for storing and enumerating backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | The connection string to connect to the Azure blob store. | 
**container_name** | **str** | The name of the container in the blob store to store and enumerate backups from. | 

## Example

```python
from openapi_client.models.azure_blob_backup_storage_description import AzureBlobBackupStorageDescription

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobBackupStorageDescription from a JSON string
azure_blob_backup_storage_description_instance = AzureBlobBackupStorageDescription.from_json(json)
# print the JSON string representation of the object
print(AzureBlobBackupStorageDescription.to_json())

# convert the object into a dict
azure_blob_backup_storage_description_dict = azure_blob_backup_storage_description_instance.to_dict()
# create an instance of AzureBlobBackupStorageDescription from a dict
azure_blob_backup_storage_description_from_dict = AzureBlobBackupStorageDescription.from_dict(azure_blob_backup_storage_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


