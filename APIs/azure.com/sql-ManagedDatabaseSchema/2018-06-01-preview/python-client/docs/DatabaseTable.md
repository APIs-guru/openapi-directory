# DatabaseTable

A database table resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_table import DatabaseTable

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseTable from a JSON string
database_table_instance = DatabaseTable.from_json(json)
# print the JSON string representation of the object
print(DatabaseTable.to_json())

# convert the object into a dict
database_table_dict = database_table_instance.to_dict()
# create an instance of DatabaseTable from a dict
database_table_from_dict = DatabaseTable.from_dict(database_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


