# ReadWriteDatabaseProperties

Class representing the Kusto database properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hot_cache_period** | **str** | The time the data should be kept in cache for fast queries in TimeSpan. | [optional] 
**is_followed** | **str** | Indicates whether the database is followed. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioned state of the resource. | [optional] [readonly] 
**soft_delete_period** | **str** | The time the data should be kept before it stops being accessible to queries in TimeSpan. | [optional] 
**statistics** | [**DatabaseStatistics**](DatabaseStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.read_write_database_properties import ReadWriteDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReadWriteDatabaseProperties from a JSON string
read_write_database_properties_instance = ReadWriteDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(ReadWriteDatabaseProperties.to_json())

# convert the object into a dict
read_write_database_properties_dict = read_write_database_properties_instance.to_dict()
# create an instance of ReadWriteDatabaseProperties from a dict
read_write_database_properties_from_dict = ReadWriteDatabaseProperties.from_dict(read_write_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


