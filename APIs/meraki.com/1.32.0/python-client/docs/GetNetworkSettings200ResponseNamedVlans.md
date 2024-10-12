# GetNetworkSettings200ResponseNamedVlans

A hash of Named VLANs options applied to the Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables / disables Named VLANs on the Network. | 

## Example

```python
from openapi_client.models.get_network_settings200_response_named_vlans import GetNetworkSettings200ResponseNamedVlans

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSettings200ResponseNamedVlans from a JSON string
get_network_settings200_response_named_vlans_instance = GetNetworkSettings200ResponseNamedVlans.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSettings200ResponseNamedVlans.to_json())

# convert the object into a dict
get_network_settings200_response_named_vlans_dict = get_network_settings200_response_named_vlans_instance.to_dict()
# create an instance of GetNetworkSettings200ResponseNamedVlans from a dict
get_network_settings200_response_named_vlans_from_dict = GetNetworkSettings200ResponseNamedVlans.from_dict(get_network_settings200_response_named_vlans_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


