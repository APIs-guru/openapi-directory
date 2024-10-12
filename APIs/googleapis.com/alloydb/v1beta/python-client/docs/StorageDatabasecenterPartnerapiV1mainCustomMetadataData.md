# StorageDatabasecenterPartnerapiV1mainCustomMetadataData

Any custom metadata associated with the resource. i.e. A spanner instance can have multiple databases with its own unique metadata. Information for these individual databases can be captured in custom metadata data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_metadata** | [**List[StorageDatabasecenterPartnerapiV1mainDatabaseMetadata]**](StorageDatabasecenterPartnerapiV1mainDatabaseMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_custom_metadata_data import StorageDatabasecenterPartnerapiV1mainCustomMetadataData

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainCustomMetadataData from a JSON string
storage_databasecenter_partnerapi_v1main_custom_metadata_data_instance = StorageDatabasecenterPartnerapiV1mainCustomMetadataData.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainCustomMetadataData.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_custom_metadata_data_dict = storage_databasecenter_partnerapi_v1main_custom_metadata_data_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainCustomMetadataData from a dict
storage_databasecenter_partnerapi_v1main_custom_metadata_data_from_dict = StorageDatabasecenterPartnerapiV1mainCustomMetadataData.from_dict(storage_databasecenter_partnerapi_v1main_custom_metadata_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


