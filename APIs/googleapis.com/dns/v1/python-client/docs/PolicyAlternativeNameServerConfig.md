# PolicyAlternativeNameServerConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#policyAlternativeNameServerConfig']
**target_name_servers** | [**List[PolicyAlternativeNameServerConfigTargetNameServer]**](PolicyAlternativeNameServerConfigTargetNameServer.md) | Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified. | [optional] 

## Example

```python
from openapi_client.models.policy_alternative_name_server_config import PolicyAlternativeNameServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyAlternativeNameServerConfig from a JSON string
policy_alternative_name_server_config_instance = PolicyAlternativeNameServerConfig.from_json(json)
# print the JSON string representation of the object
print(PolicyAlternativeNameServerConfig.to_json())

# convert the object into a dict
policy_alternative_name_server_config_dict = policy_alternative_name_server_config_instance.to_dict()
# create an instance of PolicyAlternativeNameServerConfig from a dict
policy_alternative_name_server_config_from_dict = PolicyAlternativeNameServerConfig.from_dict(policy_alternative_name_server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


