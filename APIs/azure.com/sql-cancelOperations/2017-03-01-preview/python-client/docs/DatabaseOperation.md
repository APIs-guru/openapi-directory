# DatabaseOperation

A database operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabaseOperationProperties**](DatabaseOperationProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_operation import DatabaseOperation

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseOperation from a JSON string
database_operation_instance = DatabaseOperation.from_json(json)
# print the JSON string representation of the object
print(DatabaseOperation.to_json())

# convert the object into a dict
database_operation_dict = database_operation_instance.to_dict()
# create an instance of DatabaseOperation from a dict
database_operation_from_dict = DatabaseOperation.from_dict(database_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


