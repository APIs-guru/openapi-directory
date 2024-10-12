# DatabaseProperties

Class representing the Kusto database properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hot_cache_period_in_days** | **int** | The number of days of data that should be kept in cache for fast queries. | [optional] 
**provisioning_state** | **str** | The provisioned state of the resource. | [optional] [readonly] 
**soft_delete_period_in_days** | **int** | The number of days data should be kept before it stops being accessible to queries. | 
**statistics** | [**DatabaseStatistics**](DatabaseStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.database_properties import DatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseProperties from a JSON string
database_properties_instance = DatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseProperties.to_json())

# convert the object into a dict
database_properties_dict = database_properties_instance.to_dict()
# create an instance of DatabaseProperties from a dict
database_properties_from_dict = DatabaseProperties.from_dict(database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


