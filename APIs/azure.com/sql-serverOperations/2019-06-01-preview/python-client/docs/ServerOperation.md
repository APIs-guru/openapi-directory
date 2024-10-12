# ServerOperation

A server operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerOperationProperties**](ServerOperationProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_operation import ServerOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ServerOperation from a JSON string
server_operation_instance = ServerOperation.from_json(json)
# print the JSON string representation of the object
print(ServerOperation.to_json())

# convert the object into a dict
server_operation_dict = server_operation_instance.to_dict()
# create an instance of ServerOperation from a dict
server_operation_from_dict = ServerOperation.from_dict(server_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


