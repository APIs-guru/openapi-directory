# DatabaseUsageListResult

The response to a list database metrics request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DatabaseUsage]**](DatabaseUsage.md) | The list of database usages for the database. | 

## Example

```python
from openapi_client.models.database_usage_list_result import DatabaseUsageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseUsageListResult from a JSON string
database_usage_list_result_instance = DatabaseUsageListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseUsageListResult.to_json())

# convert the object into a dict
database_usage_list_result_dict = database_usage_list_result_instance.to_dict()
# create an instance of DatabaseUsageListResult from a dict
database_usage_list_result_from_dict = DatabaseUsageListResult.from_dict(database_usage_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


