# CopyFolderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The name of the folder. | [optional] 
**parent_folder_id** | **str** | The parent folder to create the new file within. | 

## Example

```python
from openapi_client.models.copy_folder_request import CopyFolderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CopyFolderRequest from a JSON string
copy_folder_request_instance = CopyFolderRequest.from_json(json)
# print the JSON string representation of the object
print(CopyFolderRequest.to_json())

# convert the object into a dict
copy_folder_request_dict = copy_folder_request_instance.to_dict()
# create an instance of CopyFolderRequest from a dict
copy_folder_request_from_dict = CopyFolderRequest.from_dict(copy_folder_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


