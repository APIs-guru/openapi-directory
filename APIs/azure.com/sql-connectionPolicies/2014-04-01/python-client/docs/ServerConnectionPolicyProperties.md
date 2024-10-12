# ServerConnectionPolicyProperties

The properties of a server secure connection policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_type** | **str** | The server connection type. | 

## Example

```python
from openapi_client.models.server_connection_policy_properties import ServerConnectionPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerConnectionPolicyProperties from a JSON string
server_connection_policy_properties_instance = ServerConnectionPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ServerConnectionPolicyProperties.to_json())

# convert the object into a dict
server_connection_policy_properties_dict = server_connection_policy_properties_instance.to_dict()
# create an instance of ServerConnectionPolicyProperties from a dict
server_connection_policy_properties_from_dict = ServerConnectionPolicyProperties.from_dict(server_connection_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


