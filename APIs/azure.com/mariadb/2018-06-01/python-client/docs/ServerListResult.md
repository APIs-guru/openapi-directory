# ServerListResult

A list of servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Server]**](Server.md) | The list of servers | [optional] 

## Example

```python
from openapi_client.models.server_list_result import ServerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServerListResult from a JSON string
server_list_result_instance = ServerListResult.from_json(json)
# print the JSON string representation of the object
print(ServerListResult.to_json())

# convert the object into a dict
server_list_result_dict = server_list_result_instance.to_dict()
# create an instance of ServerListResult from a dict
server_list_result_from_dict = ServerListResult.from_dict(server_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


