# ResourceFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_storage_container_name** | **str** | The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. | [optional] 
**blob_prefix** | **str** | The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded. | [optional] 
**file_mode** | **str** | This property applies only to files being downloaded to Linux Compute Nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows Compute Node. If this property is not specified for a Linux Compute Node, then a default value of 0770 is applied to the file. | [optional] 
**file_path** | **str** | If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the Task&#39;s working directory (for example by using &#39;..&#39;). | [optional] 
**http_url** | **str** | The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access. | [optional] 
**storage_container_url** | **str** | The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading blobs from the container. There are two ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, or set the ACL for the container to allow public access. | [optional] 

## Example

```python
from openapi_client.models.resource_file import ResourceFile

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceFile from a JSON string
resource_file_instance = ResourceFile.from_json(json)
# print the JSON string representation of the object
print(ResourceFile.to_json())

# convert the object into a dict
resource_file_dict = resource_file_instance.to_dict()
# create an instance of ResourceFile from a dict
resource_file_from_dict = ResourceFile.from_dict(resource_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


