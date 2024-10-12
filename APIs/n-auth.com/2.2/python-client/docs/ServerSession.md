# ServerSession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serverid** | **str** | Server Id | 
**sessionid** | **str** | Base64 encoded nonce | 

## Example

```python
from openapi_client.models.server_session import ServerSession

# TODO update the JSON string below
json = "{}"
# create an instance of ServerSession from a JSON string
server_session_instance = ServerSession.from_json(json)
# print the JSON string representation of the object
print(ServerSession.to_json())

# convert the object into a dict
server_session_dict = server_session_instance.to_dict()
# create an instance of ServerSession from a dict
server_session_from_dict = ServerSession.from_dict(server_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


