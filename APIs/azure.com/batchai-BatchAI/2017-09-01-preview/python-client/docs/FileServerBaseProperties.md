# FileServerBaseProperties

The properties of a file server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disks** | [**DataDisks**](DataDisks.md) |  | 
**ssh_configuration** | [**SshConfiguration**](SshConfiguration.md) |  | 
**subnet** | [**ResourceId**](ResourceId.md) |  | [optional] 
**vm_size** | **str** | For information about available VM sizes for fileservers from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux). | 

## Example

```python
from openapi_client.models.file_server_base_properties import FileServerBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FileServerBaseProperties from a JSON string
file_server_base_properties_instance = FileServerBaseProperties.from_json(json)
# print the JSON string representation of the object
print(FileServerBaseProperties.to_json())

# convert the object into a dict
file_server_base_properties_dict = file_server_base_properties_instance.to_dict()
# create an instance of FileServerBaseProperties from a dict
file_server_base_properties_from_dict = FileServerBaseProperties.from_dict(file_server_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


