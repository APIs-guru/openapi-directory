# ListP2SVpnServerConfigurationsResult

Result of the request to list all P2SVpnServerConfigurations associated to a VirtualWan. It contains a list of P2SVpnServerConfigurations and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[P2SVpnServerConfiguration]**](P2SVpnServerConfiguration.md) | List of P2SVpnServerConfigurations. | [optional] 

## Example

```python
from openapi_client.models.list_p2_s_vpn_server_configurations_result import ListP2SVpnServerConfigurationsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListP2SVpnServerConfigurationsResult from a JSON string
list_p2_s_vpn_server_configurations_result_instance = ListP2SVpnServerConfigurationsResult.from_json(json)
# print the JSON string representation of the object
print(ListP2SVpnServerConfigurationsResult.to_json())

# convert the object into a dict
list_p2_s_vpn_server_configurations_result_dict = list_p2_s_vpn_server_configurations_result_instance.to_dict()
# create an instance of ListP2SVpnServerConfigurationsResult from a dict
list_p2_s_vpn_server_configurations_result_from_dict = ListP2SVpnServerConfigurationsResult.from_dict(list_p2_s_vpn_server_configurations_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


