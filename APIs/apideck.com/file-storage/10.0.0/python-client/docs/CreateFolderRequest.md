# CreateFolderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional description of the folder. | [optional] 
**drive_id** | **str** | ID of the drive to create the folder in. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The name of the folder. | 
**parent_folder_id** | **str** | The parent folder to create the new file within. | 

## Example

```python
from openapi_client.models.create_folder_request import CreateFolderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFolderRequest from a JSON string
create_folder_request_instance = CreateFolderRequest.from_json(json)
# print the JSON string representation of the object
print(CreateFolderRequest.to_json())

# convert the object into a dict
create_folder_request_dict = create_folder_request_instance.to_dict()
# create an instance of CreateFolderRequest from a dict
create_folder_request_from_dict = CreateFolderRequest.from_dict(create_folder_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


