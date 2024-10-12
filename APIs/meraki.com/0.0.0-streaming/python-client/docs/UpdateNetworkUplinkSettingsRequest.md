# UpdateNetworkUplinkSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limits** | [**UpdateNetworkUplinkSettingsRequestBandwidthLimits**](UpdateNetworkUplinkSettingsRequestBandwidthLimits.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_uplink_settings_request import UpdateNetworkUplinkSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkUplinkSettingsRequest from a JSON string
update_network_uplink_settings_request_instance = UpdateNetworkUplinkSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkUplinkSettingsRequest.to_json())

# convert the object into a dict
update_network_uplink_settings_request_dict = update_network_uplink_settings_request_instance.to_dict()
# create an instance of UpdateNetworkUplinkSettingsRequest from a dict
update_network_uplink_settings_request_from_dict = UpdateNetworkUplinkSettingsRequest.from_dict(update_network_uplink_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


