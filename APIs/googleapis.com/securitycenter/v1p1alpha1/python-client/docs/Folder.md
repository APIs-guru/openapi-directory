# Folder

Message that contains the resource name and display name of a folder resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_folder** | **str** | Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**resource_folder_display_name** | **str** | The user defined display name for this folder. | [optional] 

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


