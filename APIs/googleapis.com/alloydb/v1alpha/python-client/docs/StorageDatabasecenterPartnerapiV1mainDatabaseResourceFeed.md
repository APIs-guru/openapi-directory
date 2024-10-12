# StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed

DatabaseResourceFeed is the top level proto to be used to ingest different database resource level events into Condor platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed_timestamp** | **str** | Required. Timestamp when feed is generated. | [optional] 
**feed_type** | **str** | Required. Type feed to be ingested into condor | [optional] 
**recommendation_signal_data** | [**StorageDatabasecenterPartnerapiV1mainDatabaseResourceRecommendationSignalData**](StorageDatabasecenterPartnerapiV1mainDatabaseResourceRecommendationSignalData.md) |  | [optional] 
**resource_health_signal_data** | [**StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalData**](StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalData.md) |  | [optional] 
**resource_id** | [**StorageDatabasecenterPartnerapiV1mainDatabaseResourceId**](StorageDatabasecenterPartnerapiV1mainDatabaseResourceId.md) |  | [optional] 
**resource_metadata** | [**StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata**](StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_database_resource_feed import StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed from a JSON string
storage_databasecenter_partnerapi_v1main_database_resource_feed_instance = StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_database_resource_feed_dict = storage_databasecenter_partnerapi_v1main_database_resource_feed_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed from a dict
storage_databasecenter_partnerapi_v1main_database_resource_feed_from_dict = StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed.from_dict(storage_databasecenter_partnerapi_v1main_database_resource_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


