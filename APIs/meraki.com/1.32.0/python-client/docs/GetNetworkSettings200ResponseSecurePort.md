# GetNetworkSettings200ResponseSecurePort

A hash of SecureConnect options applied to the Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables / disables SecureConnect on the network. Optional. | [optional] 

## Example

```python
from openapi_client.models.get_network_settings200_response_secure_port import GetNetworkSettings200ResponseSecurePort

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSettings200ResponseSecurePort from a JSON string
get_network_settings200_response_secure_port_instance = GetNetworkSettings200ResponseSecurePort.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSettings200ResponseSecurePort.to_json())

# convert the object into a dict
get_network_settings200_response_secure_port_dict = get_network_settings200_response_secure_port_instance.to_dict()
# create an instance of GetNetworkSettings200ResponseSecurePort from a dict
get_network_settings200_response_secure_port_from_dict = GetNetworkSettings200ResponseSecurePort.from_dict(get_network_settings200_response_secure_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


