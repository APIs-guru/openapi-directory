# ServerDnsAliasAcquisition

A server DNS alias acquisition request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_server_dns_alias_id** | **str** | The id of the server alias that will be acquired to point to this server instead. | [optional] 

## Example

```python
from openapi_client.models.server_dns_alias_acquisition import ServerDnsAliasAcquisition

# TODO update the JSON string below
json = "{}"
# create an instance of ServerDnsAliasAcquisition from a JSON string
server_dns_alias_acquisition_instance = ServerDnsAliasAcquisition.from_json(json)
# print the JSON string representation of the object
print(ServerDnsAliasAcquisition.to_json())

# convert the object into a dict
server_dns_alias_acquisition_dict = server_dns_alias_acquisition_instance.to_dict()
# create an instance of ServerDnsAliasAcquisition from a dict
server_dns_alias_acquisition_from_dict = ServerDnsAliasAcquisition.from_dict(server_dns_alias_acquisition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


