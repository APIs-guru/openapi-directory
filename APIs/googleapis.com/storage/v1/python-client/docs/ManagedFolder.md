# ManagedFolder

A managed folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | The name of the bucket containing this managed folder. | [optional] 
**create_time** | **datetime** | The creation time of the managed folder in RFC 3339 format. | [optional] 
**id** | **str** | The ID of the managed folder, including the bucket name and managed folder name. | [optional] 
**kind** | **str** | The kind of item this is. For managed folders, this is always storage#managedFolder. | [optional] [default to 'storage#managedFolder']
**metageneration** | **str** | The version of the metadata for this managed folder. Used for preconditions and for detecting changes in metadata. | [optional] 
**name** | **str** | The name of the managed folder. Required if not specified by URL parameter. | [optional] 
**self_link** | **str** | The link to this managed folder. | [optional] 
**update_time** | **datetime** | The last update time of the managed folder metadata in RFC 3339 format. | [optional] 

## Example

```python
from openapi_client.models.managed_folder import ManagedFolder

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedFolder from a JSON string
managed_folder_instance = ManagedFolder.from_json(json)
# print the JSON string representation of the object
print(ManagedFolder.to_json())

# convert the object into a dict
managed_folder_dict = managed_folder_instance.to_dict()
# create an instance of ManagedFolder from a dict
managed_folder_from_dict = ManagedFolder.from_dict(managed_folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


