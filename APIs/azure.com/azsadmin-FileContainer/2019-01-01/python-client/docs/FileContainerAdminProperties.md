# FileContainerAdminProperties

File Container Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ErrorInfo**](ErrorInfo.md) |  | [optional] 
**file_container_id** | **str** | File container resource identifier containing product manifest. | [optional] 
**post_copy_action** | [**PostCopyAction**](PostCopyAction.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the resource. | [optional] 
**source_uri** | **str** | Specifies The remote file location. | [optional] 
**uri** | **str** | The file or container Uri. This is read-only property; a user cannot set it. | [optional] 

## Example

```python
from openapi_client.models.file_container_admin_properties import FileContainerAdminProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FileContainerAdminProperties from a JSON string
file_container_admin_properties_instance = FileContainerAdminProperties.from_json(json)
# print the JSON string representation of the object
print(FileContainerAdminProperties.to_json())

# convert the object into a dict
file_container_admin_properties_dict = file_container_admin_properties_instance.to_dict()
# create an instance of FileContainerAdminProperties from a dict
file_container_admin_properties_from_dict = FileContainerAdminProperties.from_dict(file_container_admin_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


