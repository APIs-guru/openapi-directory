# AzureBlobFileSystemConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | **str** | This property is mutually exclusive with sasKey and one must be specified. | [optional] 
**account_name** | **str** |  | 
**blobfuse_options** | **str** | These are &#39;net use&#39; options in Windows and &#39;mount&#39; options in Linux. | [optional] 
**container_name** | **str** |  | 
**relative_mount_path** | **str** | All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. | 
**sas_key** | **str** | This property is mutually exclusive with accountKey and one must be specified. | [optional] 

## Example

```python
from openapi_client.models.azure_blob_file_system_configuration import AzureBlobFileSystemConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobFileSystemConfiguration from a JSON string
azure_blob_file_system_configuration_instance = AzureBlobFileSystemConfiguration.from_json(json)
# print the JSON string representation of the object
print(AzureBlobFileSystemConfiguration.to_json())

# convert the object into a dict
azure_blob_file_system_configuration_dict = azure_blob_file_system_configuration_instance.to_dict()
# create an instance of AzureBlobFileSystemConfiguration from a dict
azure_blob_file_system_configuration_from_dict = AzureBlobFileSystemConfiguration.from_dict(azure_blob_file_system_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


