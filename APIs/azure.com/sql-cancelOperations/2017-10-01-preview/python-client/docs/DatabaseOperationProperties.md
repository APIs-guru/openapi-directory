# DatabaseOperationProperties

The properties of a database operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | The name of the database the operation is being performed on. | [optional] [readonly] 
**description** | **str** | The operation description. | [optional] [readonly] 
**error_code** | **int** | The operation error code. | [optional] [readonly] 
**error_description** | **str** | The operation error description. | [optional] [readonly] 
**error_severity** | **int** | The operation error severity. | [optional] [readonly] 
**estimated_completion_time** | **datetime** | The estimated completion time of the operation. | [optional] [readonly] 
**is_cancellable** | **bool** | Whether the operation can be cancelled. | [optional] [readonly] 
**is_user_error** | **bool** | Whether or not the error is a user error. | [optional] [readonly] 
**operation** | **str** | The name of operation. | [optional] [readonly] 
**operation_friendly_name** | **str** | The friendly name of operation. | [optional] [readonly] 
**percent_complete** | **int** | The percentage of the operation completed. | [optional] [readonly] 
**server_name** | **str** | The name of the server. | [optional] [readonly] 
**start_time** | **datetime** | The operation start time. | [optional] [readonly] 
**state** | **str** | The operation state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_operation_properties import DatabaseOperationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseOperationProperties from a JSON string
database_operation_properties_instance = DatabaseOperationProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseOperationProperties.to_json())

# convert the object into a dict
database_operation_properties_dict = database_operation_properties_instance.to_dict()
# create an instance of DatabaseOperationProperties from a dict
database_operation_properties_from_dict = DatabaseOperationProperties.from_dict(database_operation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


