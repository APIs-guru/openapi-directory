# ListFoldersResponse

The ListFolders response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folders** | [**List[Folder]**](Folder.md) | A possibly paginated list of Folders that are direct descendants of the specified parent resource. | [optional] 
**next_page_token** | **str** | A pagination token returned from a previous call to &#x60;ListFolders&#x60; that indicates from where listing should continue. | [optional] 

## Example

```python
from openapi_client.models.list_folders_response import ListFoldersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFoldersResponse from a JSON string
list_folders_response_instance = ListFoldersResponse.from_json(json)
# print the JSON string representation of the object
print(ListFoldersResponse.to_json())

# convert the object into a dict
list_folders_response_dict = list_folders_response_instance.to_dict()
# create an instance of ListFoldersResponse from a dict
list_folders_response_from_dict = ListFoldersResponse.from_dict(list_folders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


