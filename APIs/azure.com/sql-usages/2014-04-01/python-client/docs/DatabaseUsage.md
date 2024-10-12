# DatabaseUsage

The database usages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **float** | The current value of the usage metric. | [optional] [readonly] 
**display_name** | **str** | The usage metric display name. | [optional] [readonly] 
**limit** | **float** | The current limit of the usage metric. | [optional] [readonly] 
**name** | **str** | The name of the usage metric. | [optional] [readonly] 
**next_reset_time** | **datetime** | The next reset time for the usage metric (ISO8601 format). | [optional] [readonly] 
**resource_name** | **str** | The name of the resource. | [optional] [readonly] 
**unit** | **str** | The units of the usage metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_usage import DatabaseUsage

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseUsage from a JSON string
database_usage_instance = DatabaseUsage.from_json(json)
# print the JSON string representation of the object
print(DatabaseUsage.to_json())

# convert the object into a dict
database_usage_dict = database_usage_instance.to_dict()
# create an instance of DatabaseUsage from a dict
database_usage_from_dict = DatabaseUsage.from_dict(database_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


