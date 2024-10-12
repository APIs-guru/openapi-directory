# RegisteredServerArray

Array of RegisteredServer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RegisteredServer]**](RegisteredServer.md) | Collection of Registered Server. | [optional] 

## Example

```python
from openapi_client.models.registered_server_array import RegisteredServerArray

# TODO update the JSON string below
json = "{}"
# create an instance of RegisteredServerArray from a JSON string
registered_server_array_instance = RegisteredServerArray.from_json(json)
# print the JSON string representation of the object
print(RegisteredServerArray.to_json())

# convert the object into a dict
registered_server_array_dict = registered_server_array_instance.to_dict()
# create an instance of RegisteredServerArray from a dict
registered_server_array_from_dict = RegisteredServerArray.from_dict(registered_server_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


