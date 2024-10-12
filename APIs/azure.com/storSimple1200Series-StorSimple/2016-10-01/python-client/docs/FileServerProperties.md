# FileServerProperties

The file server properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_schedule_group_id** | **str** | The backup policy id. | 
**description** | **str** | The description of the file server | [optional] 
**domain_name** | **str** | Domain of the file server | 
**storage_domain_id** | **str** | The storage domain id. | 

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


