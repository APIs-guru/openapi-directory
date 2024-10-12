# DatabaseType

A message defining the database engine and provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine** | **str** | The database engine. | [optional] 
**provider** | **str** | The database provider. | [optional] 

## Example

```python
from openapi_client.models.database_type import DatabaseType

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseType from a JSON string
database_type_instance = DatabaseType.from_json(json)
# print the JSON string representation of the object
print(DatabaseType.to_json())

# convert the object into a dict
database_type_dict = database_type_instance.to_dict()
# create an instance of DatabaseType from a dict
database_type_from_dict = DatabaseType.from_dict(database_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


