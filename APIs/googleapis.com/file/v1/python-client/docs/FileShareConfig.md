# FileShareConfig

File share configuration for the instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_gb** | **str** | File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes. | [optional] 
**name** | **str** | Required. The name of the file share. Must use 1-16 characters for the basic service tier and 1-63 characters for all other service tiers. Must use lowercase letters, numbers, or underscores &#x60;[a-z0-9_]&#x60;. Must start with a letter. Immutable. | [optional] 
**nfs_export_options** | [**List[NfsExportOptions]**](NfsExportOptions.md) | Nfs Export Options. There is a limit of 10 export options per file share. | [optional] 
**source_backup** | **str** | The resource name of the backup, in the format &#x60;projects/{project_number}/locations/{location_id}/backups/{backup_id}&#x60;, that this file share has been restored from. | [optional] 

## Example

```python
from openapi_client.models.file_share_config import FileShareConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FileShareConfig from a JSON string
file_share_config_instance = FileShareConfig.from_json(json)
# print the JSON string representation of the object
print(FileShareConfig.to_json())

# convert the object into a dict
file_share_config_dict = file_share_config_instance.to_dict()
# create an instance of FileShareConfig from a dict
file_share_config_from_dict = FileShareConfig.from_dict(file_share_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


