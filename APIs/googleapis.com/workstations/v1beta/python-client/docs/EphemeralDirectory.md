# EphemeralDirectory

An ephemeral directory which won't persist across workstation sessions. It is freshly created on every workstation start operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gce_pd** | [**GcePersistentDisk**](GcePersistentDisk.md) |  | [optional] 
**mount_path** | **str** | Required. Location of this directory in the running workstation. | [optional] 

## Example

```python
from openapi_client.models.ephemeral_directory import EphemeralDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of EphemeralDirectory from a JSON string
ephemeral_directory_instance = EphemeralDirectory.from_json(json)
# print the JSON string representation of the object
print(EphemeralDirectory.to_json())

# convert the object into a dict
ephemeral_directory_dict = ephemeral_directory_instance.to_dict()
# create an instance of EphemeralDirectory from a dict
ephemeral_directory_from_dict = EphemeralDirectory.from_dict(ephemeral_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


