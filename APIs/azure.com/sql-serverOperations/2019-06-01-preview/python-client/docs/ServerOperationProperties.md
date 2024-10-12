# ServerOperationProperties

The properties of a server operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
from openapi_client.models.server_operation_properties import ServerOperationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerOperationProperties from a JSON string
server_operation_properties_instance = ServerOperationProperties.from_json(json)
# print the JSON string representation of the object
print(ServerOperationProperties.to_json())

# convert the object into a dict
server_operation_properties_dict = server_operation_properties_instance.to_dict()
# create an instance of ServerOperationProperties from a dict
server_operation_properties_from_dict = ServerOperationProperties.from_dict(server_operation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


