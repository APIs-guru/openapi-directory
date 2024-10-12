# ServerOperationListResult

The response to a list server operations request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ServerOperation]**](ServerOperation.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_operation_list_result import ServerOperationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServerOperationListResult from a JSON string
server_operation_list_result_instance = ServerOperationListResult.from_json(json)
# print the JSON string representation of the object
print(ServerOperationListResult.to_json())

# convert the object into a dict
server_operation_list_result_dict = server_operation_list_result_instance.to_dict()
# create an instance of ServerOperationListResult from a dict
server_operation_list_result_from_dict = ServerOperationListResult.from_dict(server_operation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


