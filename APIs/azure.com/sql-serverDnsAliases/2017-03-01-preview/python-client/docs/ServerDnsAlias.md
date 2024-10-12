# ServerDnsAlias

A server DNS alias.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerDnsAliasProperties**](ServerDnsAliasProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_dns_alias import ServerDnsAlias

# TODO update the JSON string below
json = "{}"
# create an instance of ServerDnsAlias from a JSON string
server_dns_alias_instance = ServerDnsAlias.from_json(json)
# print the JSON string representation of the object
print(ServerDnsAlias.to_json())

# convert the object into a dict
server_dns_alias_dict = server_dns_alias_instance.to_dict()
# create an instance of ServerDnsAlias from a dict
server_dns_alias_from_dict = ServerDnsAlias.from_dict(server_dns_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


