# ServerConnectionPolicy

A server secure connection policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Metadata used for the Azure portal experience. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**ServerConnectionPolicyProperties**](ServerConnectionPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_connection_policy import ServerConnectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServerConnectionPolicy from a JSON string
server_connection_policy_instance = ServerConnectionPolicy.from_json(json)
# print the JSON string representation of the object
print(ServerConnectionPolicy.to_json())

# convert the object into a dict
server_connection_policy_dict = server_connection_policy_instance.to_dict()
# create an instance of ServerConnectionPolicy from a dict
server_connection_policy_from_dict = ServerConnectionPolicy.from_dict(server_connection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


