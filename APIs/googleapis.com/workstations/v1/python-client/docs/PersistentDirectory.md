# PersistentDirectory

A directory to persist across workstation sessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gce_pd** | [**GceRegionalPersistentDisk**](GceRegionalPersistentDisk.md) |  | [optional] 
**mount_path** | **str** | Optional. Location of this directory in the running workstation. | [optional] 

## Example

```python
from openapi_client.models.persistent_directory import PersistentDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of PersistentDirectory from a JSON string
persistent_directory_instance = PersistentDirectory.from_json(json)
# print the JSON string representation of the object
print(PersistentDirectory.to_json())

# convert the object into a dict
persistent_directory_dict = persistent_directory_instance.to_dict()
# create an instance of PersistentDirectory from a dict
persistent_directory_from_dict = PersistentDirectory.from_dict(persistent_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


