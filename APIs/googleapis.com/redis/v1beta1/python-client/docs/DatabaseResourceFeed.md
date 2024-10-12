# DatabaseResourceFeed

DatabaseResourceFeed is the top level proto to be used to ingest different database resource level events into Condor platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed_timestamp** | **str** | Required. Timestamp when feed is generated. | [optional] 
**feed_type** | **str** | Required. Type feed to be ingested into condor | [optional] 
**recommendation_signal_data** | [**DatabaseResourceRecommendationSignalData**](DatabaseResourceRecommendationSignalData.md) |  | [optional] 
**resource_health_signal_data** | [**DatabaseResourceHealthSignalData**](DatabaseResourceHealthSignalData.md) |  | [optional] 
**resource_id** | [**DatabaseResourceId**](DatabaseResourceId.md) |  | [optional] 
**resource_metadata** | [**DatabaseResourceMetadata**](DatabaseResourceMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.database_resource_feed import DatabaseResourceFeed

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseResourceFeed from a JSON string
database_resource_feed_instance = DatabaseResourceFeed.from_json(json)
# print the JSON string representation of the object
print(DatabaseResourceFeed.to_json())

# convert the object into a dict
database_resource_feed_dict = database_resource_feed_instance.to_dict()
# create an instance of DatabaseResourceFeed from a dict
database_resource_feed_from_dict = DatabaseResourceFeed.from_dict(database_resource_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


