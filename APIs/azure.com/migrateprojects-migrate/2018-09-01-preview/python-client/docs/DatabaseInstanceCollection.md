# DatabaseInstanceCollection

Collection of database instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the value of nextLink. | [optional] 
**value** | [**List[DatabaseInstance]**](DatabaseInstance.md) | Gets or sets the database instances. | [optional] 

## Example

```python
from openapi_client.models.database_instance_collection import DatabaseInstanceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstanceCollection from a JSON string
database_instance_collection_instance = DatabaseInstanceCollection.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstanceCollection.to_json())

# convert the object into a dict
database_instance_collection_dict = database_instance_collection_instance.to_dict()
# create an instance of DatabaseInstanceCollection from a dict
database_instance_collection_from_dict = DatabaseInstanceCollection.from_dict(database_instance_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


