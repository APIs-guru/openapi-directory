# ServerKeyListResult

A list of MariaDB Server keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ServerKey]**](ServerKey.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_key_list_result import ServerKeyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServerKeyListResult from a JSON string
server_key_list_result_instance = ServerKeyListResult.from_json(json)
# print the JSON string representation of the object
print(ServerKeyListResult.to_json())

# convert the object into a dict
server_key_list_result_dict = server_key_list_result_instance.to_dict()
# create an instance of ServerKeyListResult from a dict
server_key_list_result_from_dict = ServerKeyListResult.from_dict(server_key_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


