# ReadOnlyFollowingDatabaseProperties

Class representing the Kusto database properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attached_database_configuration_name** | **str** | The name of the attached database configuration cluster | [optional] [readonly] 
**hot_cache_period** | **str** | The time the data should be kept in cache for fast queries in TimeSpan. | [optional] 
**leader_cluster_resource_id** | **str** | The name of the leader cluster | [optional] [readonly] 
**principals_modification_kind** | **str** | The principals modification kind of the database | [optional] [readonly] 
**provisioning_state** | **str** | The provisioned state of the resource. | [optional] [readonly] 
**soft_delete_period** | **str** | The time the data should be kept before it stops being accessible to queries in TimeSpan. | [optional] [readonly] 
**statistics** | [**DatabaseStatistics**](DatabaseStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.read_only_following_database_properties import ReadOnlyFollowingDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReadOnlyFollowingDatabaseProperties from a JSON string
read_only_following_database_properties_instance = ReadOnlyFollowingDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(ReadOnlyFollowingDatabaseProperties.to_json())

# convert the object into a dict
read_only_following_database_properties_dict = read_only_following_database_properties_instance.to_dict()
# create an instance of ReadOnlyFollowingDatabaseProperties from a dict
read_only_following_database_properties_from_dict = ReadOnlyFollowingDatabaseProperties.from_dict(read_only_following_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


