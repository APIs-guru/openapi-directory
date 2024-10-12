# ServerDnsAliasProperties

Properties of a server DNS alias.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_dns_record** | **str** | The fully qualified DNS record for alias | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_dns_alias_properties import ServerDnsAliasProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerDnsAliasProperties from a JSON string
server_dns_alias_properties_instance = ServerDnsAliasProperties.from_json(json)
# print the JSON string representation of the object
print(ServerDnsAliasProperties.to_json())

# convert the object into a dict
server_dns_alias_properties_dict = server_dns_alias_properties_instance.to_dict()
# create an instance of ServerDnsAliasProperties from a dict
server_dns_alias_properties_from_dict = ServerDnsAliasProperties.from_dict(server_dns_alias_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


