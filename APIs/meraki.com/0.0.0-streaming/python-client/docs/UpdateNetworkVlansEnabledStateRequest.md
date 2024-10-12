# UpdateNetworkVlansEnabledStateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Boolean indicating whether to enable (true) or disable (false) VLANs for the network | 

## Example

```python
from openapi_client.models.update_network_vlans_enabled_state_request import UpdateNetworkVlansEnabledStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkVlansEnabledStateRequest from a JSON string
update_network_vlans_enabled_state_request_instance = UpdateNetworkVlansEnabledStateRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkVlansEnabledStateRequest.to_json())

# convert the object into a dict
update_network_vlans_enabled_state_request_dict = update_network_vlans_enabled_state_request_instance.to_dict()
# create an instance of UpdateNetworkVlansEnabledStateRequest from a dict
update_network_vlans_enabled_state_request_from_dict = UpdateNetworkVlansEnabledStateRequest.from_dict(update_network_vlans_enabled_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


