# Folders

A list of folders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Folder]**](Folder.md) | The list of items. | [optional] 
**kind** | **str** | The kind of item this is. For lists of folders, this is always storage#folders. | [optional] [default to 'storage#folders']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.folders import Folders

# TODO update the JSON string below
json = "{}"
# create an instance of Folders from a JSON string
folders_instance = Folders.from_json(json)
# print the JSON string representation of the object
print(Folders.to_json())

# convert the object into a dict
folders_dict = folders_instance.to_dict()
# create an instance of Folders from a dict
folders_from_dict = Folders.from_dict(folders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


