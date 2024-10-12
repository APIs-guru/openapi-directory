# DiffDiskSettings

Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**option** | [**DiffDiskOption**](DiffDiskOption.md) |  | [optional] 

## Example

```python
from openapi_client.models.diff_disk_settings import DiffDiskSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DiffDiskSettings from a JSON string
diff_disk_settings_instance = DiffDiskSettings.from_json(json)
# print the JSON string representation of the object
print(DiffDiskSettings.to_json())

# convert the object into a dict
diff_disk_settings_dict = diff_disk_settings_instance.to_dict()
# create an instance of DiffDiskSettings from a dict
diff_disk_settings_from_dict = DiffDiskSettings.from_dict(diff_disk_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


