# StorageProfile

Storage Profile properties of a server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_retention_days** | **int** | Backup retention days for the server. | [optional] 
**geo_redundant_backup** | **str** | Enable Geo-redundant or not for server backup. | [optional] 
**storage_autogrow** | **str** | Enable Storage Auto Grow. | [optional] 
**storage_mb** | **int** | Max storage allowed for a server. | [optional] 

## Example

```python
from openapi_client.models.storage_profile import StorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of StorageProfile from a JSON string
storage_profile_instance = StorageProfile.from_json(json)
# print the JSON string representation of the object
print(StorageProfile.to_json())

# convert the object into a dict
storage_profile_dict = storage_profile_instance.to_dict()
# create an instance of StorageProfile from a dict
storage_profile_from_dict = StorageProfile.from_dict(storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


