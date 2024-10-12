# GremlinDatabaseListResult

The List operation response, that contains the Gremlin databases and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[GremlinDatabaseGetResults]**](GremlinDatabaseGetResults.md) | List of Gremlin databases and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gremlin_database_list_result import GremlinDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinDatabaseListResult from a JSON string
gremlin_database_list_result_instance = GremlinDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(GremlinDatabaseListResult.to_json())

# convert the object into a dict
gremlin_database_list_result_dict = gremlin_database_list_result_instance.to_dict()
# create an instance of GremlinDatabaseListResult from a dict
gremlin_database_list_result_from_dict = GremlinDatabaseListResult.from_dict(gremlin_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


