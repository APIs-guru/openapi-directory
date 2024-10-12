# UpdateFolderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional description of the folder. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The name of the folder. | [optional] 
**parent_folder_id** | **str** | The parent folder to create the new file within. | [optional] 

## Example

```python
from openapi_client.models.update_folder_request import UpdateFolderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFolderRequest from a JSON string
update_folder_request_instance = UpdateFolderRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateFolderRequest.to_json())

# convert the object into a dict
update_folder_request_dict = update_folder_request_instance.to_dict()
# create an instance of UpdateFolderRequest from a dict
update_folder_request_from_dict = UpdateFolderRequest.from_dict(update_folder_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


