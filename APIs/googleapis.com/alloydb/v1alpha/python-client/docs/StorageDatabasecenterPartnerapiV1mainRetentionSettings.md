# StorageDatabasecenterPartnerapiV1mainRetentionSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity_based_retention** | **int** |  | [optional] 
**retention_unit** | **str** | The unit that &#39;retained_backups&#39; represents. | [optional] 
**time_based_retention** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_retention_settings import StorageDatabasecenterPartnerapiV1mainRetentionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainRetentionSettings from a JSON string
storage_databasecenter_partnerapi_v1main_retention_settings_instance = StorageDatabasecenterPartnerapiV1mainRetentionSettings.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainRetentionSettings.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_retention_settings_dict = storage_databasecenter_partnerapi_v1main_retention_settings_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainRetentionSettings from a dict
storage_databasecenter_partnerapi_v1main_retention_settings_from_dict = StorageDatabasecenterPartnerapiV1mainRetentionSettings.from_dict(storage_databasecenter_partnerapi_v1main_retention_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


