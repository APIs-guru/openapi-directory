# ListFoldersResponse

List Folders Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | [**List[Folder]**](Folder.md) | All GTM Folders of a GTM Container. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

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


