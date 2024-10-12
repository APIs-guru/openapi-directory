# FileServerProperties

File server specific properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** |  | [optional] [readonly] 
**data_disks** | [**DataDisks**](DataDisks.md) |  | [optional] 
**mount_settings** | [**MountSettings**](MountSettings.md) |  | [optional] 
**provisioning_state** | **str** | Possible values: creating - The File Server is getting created. updating - The File Server creation has been accepted and it is getting updated. deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted. failed - The File Server creation has failed with the specified errorCode. Details about the error code are specified in the message field. succeeded - The File Server creation has succeeded. | [optional] [readonly] 
**provisioning_state_transition_time** | **datetime** |  | [optional] [readonly] 
**ssh_configuration** | [**SshConfiguration**](SshConfiguration.md) |  | [optional] 
**subnet** | [**ResourceId**](ResourceId.md) |  | [optional] 
**vm_size** | **str** | For information about available VM sizes for File Server from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux). | [optional] 

## Example

```python
from openapi_client.models.file_server_properties import FileServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FileServerProperties from a JSON string
file_server_properties_instance = FileServerProperties.from_json(json)
# print the JSON string representation of the object
print(FileServerProperties.to_json())

# convert the object into a dict
file_server_properties_dict = file_server_properties_instance.to_dict()
# create an instance of FileServerProperties from a dict
file_server_properties_from_dict = FileServerProperties.from_dict(file_server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


