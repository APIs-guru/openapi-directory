# MoveTableToDatabaseRequest

Request message for DataprocMetastore.MoveTableToDatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**db_name** | **str** | Required. The name of the database where the table resides. | [optional] 
**destination_db_name** | **str** | Required. The name of the database where the table should be moved. | [optional] 
**table_name** | **str** | Required. The name of the table to be moved. | [optional] 

## Example

```python
from openapi_client.models.move_table_to_database_request import MoveTableToDatabaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveTableToDatabaseRequest from a JSON string
move_table_to_database_request_instance = MoveTableToDatabaseRequest.from_json(json)
# print the JSON string representation of the object
print(MoveTableToDatabaseRequest.to_json())

# convert the object into a dict
move_table_to_database_request_dict = move_table_to_database_request_instance.to_dict()
# create an instance of MoveTableToDatabaseRequest from a dict
move_table_to_database_request_from_dict = MoveTableToDatabaseRequest.from_dict(move_table_to_database_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


