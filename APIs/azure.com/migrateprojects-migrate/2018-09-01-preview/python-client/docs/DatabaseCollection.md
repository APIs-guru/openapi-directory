# DatabaseCollection

Collection of databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the value of nextLink. | [optional] 
**value** | [**List[Database]**](Database.md) | Gets or sets the databases. | [optional] 

## Example

```python
from openapi_client.models.database_collection import DatabaseCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseCollection from a JSON string
database_collection_instance = DatabaseCollection.from_json(json)
# print the JSON string representation of the object
print(DatabaseCollection.to_json())

# convert the object into a dict
database_collection_dict = database_collection_instance.to_dict()
# create an instance of DatabaseCollection from a dict
database_collection_from_dict = DatabaseCollection.from_dict(database_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


