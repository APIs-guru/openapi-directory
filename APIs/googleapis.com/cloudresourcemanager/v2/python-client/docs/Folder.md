# Folder

A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when the Folder was created. Assigned by the server. | [optional] [readonly] 
**display_name** | **str** | The folder&#39;s display name. A folder&#39;s display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: &#x60;[\\p{L}\\p{N}]([\\p{L}\\p{N}_- ]{0,28}[\\p{L}\\p{N}])?&#x60;. | [optional] 
**lifecycle_state** | **str** | Output only. The lifecycle state of the folder. Updates to the lifecycle_state must be performed via DeleteFolder and UndeleteFolder. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the Folder. Its format is &#x60;folders/{folder_id}&#x60;, for example: \&quot;folders/1234\&quot;. | [optional] [readonly] 
**parent** | **str** | Required. The Folder&#39;s parent&#39;s resource name. Updates to the folder&#39;s parent must be performed via MoveFolder. | [optional] 

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


