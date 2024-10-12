# ServerUsageListResult

Represents the response to a list server metrics request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ServerUsage]**](ServerUsage.md) | The list of server metrics for the server. | 

## Example

```python
from openapi_client.models.server_usage_list_result import ServerUsageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServerUsageListResult from a JSON string
server_usage_list_result_instance = ServerUsageListResult.from_json(json)
# print the JSON string representation of the object
print(ServerUsageListResult.to_json())

# convert the object into a dict
server_usage_list_result_dict = server_usage_list_result_instance.to_dict()
# create an instance of ServerUsageListResult from a dict
server_usage_list_result_from_dict = ServerUsageListResult.from_dict(server_usage_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


