# ManagedFolders

A list of managed folders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ManagedFolder]**](ManagedFolder.md) | The list of items. | [optional] 
**kind** | **str** | The kind of item this is. For lists of managed folders, this is always storage#managedFolders. | [optional] [default to 'storage#managedFolders']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.managed_folders import ManagedFolders

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedFolders from a JSON string
managed_folders_instance = ManagedFolders.from_json(json)
# print the JSON string representation of the object
print(ManagedFolders.to_json())

# convert the object into a dict
managed_folders_dict = managed_folders_instance.to_dict()
# create an instance of ManagedFolders from a dict
managed_folders_from_dict = ManagedFolders.from_dict(managed_folders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


