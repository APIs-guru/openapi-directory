# FileServerReference

Provides required information, for the service to be able to mount Azure FileShare on the cluster nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_server** | [**ResourceId**](ResourceId.md) |  | 
**mount_options** | **str** |  | [optional] 
**relative_mount_path** | **str** | Note that all cluster level file servers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and job level file servers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT. | 
**source_directory** | **str** | If this property is not specified, the entire File Server will be mounted. | [optional] 

## Example

```python
from openapi_client.models.file_server_reference import FileServerReference

# TODO update the JSON string below
json = "{}"
# create an instance of FileServerReference from a JSON string
file_server_reference_instance = FileServerReference.from_json(json)
# print the JSON string representation of the object
print(FileServerReference.to_json())

# convert the object into a dict
file_server_reference_dict = file_server_reference_instance.to_dict()
# create an instance of FileServerReference from a dict
file_server_reference_from_dict = FileServerReference.from_dict(file_server_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


