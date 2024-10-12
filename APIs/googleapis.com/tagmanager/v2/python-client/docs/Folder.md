# Folder

Represents a Google Tag Manager Folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified. | [optional] 
**folder_id** | **str** | The Folder ID uniquely identifies the GTM Folder. | [optional] 
**name** | **str** | Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update | [optional] 
**notes** | **str** | User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update | [optional] 
**path** | **str** | GTM Folder&#39;s API relative path. | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 
**workspace_id** | **str** | GTM Workspace ID. | [optional] 

## Example

```python
from openapi_client.models.folder import Folder

# TODO update the JSON string below
json = "{}"
# create an instance of Folder from a JSON string
folder_instance = Folder.from_json(json)
# print the JSON string representation of the object
print(Folder.to_json())

# convert the object into a dict
folder_dict = folder_instance.to_dict()
# create an instance of Folder from a dict
folder_from_dict = Folder.from_dict(folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


