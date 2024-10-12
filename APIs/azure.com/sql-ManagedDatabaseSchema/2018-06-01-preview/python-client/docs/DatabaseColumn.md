# DatabaseColumn

A database column resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabaseColumnProperties**](DatabaseColumnProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_column import DatabaseColumn

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseColumn from a JSON string
database_column_instance = DatabaseColumn.from_json(json)
# print the JSON string representation of the object
print(DatabaseColumn.to_json())

# convert the object into a dict
database_column_dict = database_column_instance.to_dict()
# create an instance of DatabaseColumn from a dict
database_column_from_dict = DatabaseColumn.from_dict(database_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


