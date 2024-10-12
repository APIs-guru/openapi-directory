# GetNetworkSwitchAccessControlLists200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[GetNetworkSwitchAccessControlLists200ResponseRulesInner]**](GetNetworkSwitchAccessControlLists200ResponseRulesInner.md) | An ordered array of the access control list rules | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_access_control_lists200_response import GetNetworkSwitchAccessControlLists200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchAccessControlLists200Response from a JSON string
get_network_switch_access_control_lists200_response_instance = GetNetworkSwitchAccessControlLists200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchAccessControlLists200Response.to_json())

# convert the object into a dict
get_network_switch_access_control_lists200_response_dict = get_network_switch_access_control_lists200_response_instance.to_dict()
# create an instance of GetNetworkSwitchAccessControlLists200Response from a dict
get_network_switch_access_control_lists200_response_from_dict = GetNetworkSwitchAccessControlLists200Response.from_dict(get_network_switch_access_control_lists200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


