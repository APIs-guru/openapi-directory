# UpdateNetworkWarmSpareSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable warm spare | 
**spare_serial** | **str** | Serial number of the warm spare appliance | [optional] 
**uplink_mode** | **str** | Uplink mode, either virtual or public | [optional] 
**virtual_ip1** | **str** | The WAN 1 shared IP | [optional] 
**virtual_ip2** | **str** | The WAN 2 shared IP | [optional] 

## Example

```python
from openapi_client.models.update_network_warm_spare_settings_request import UpdateNetworkWarmSpareSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWarmSpareSettingsRequest from a JSON string
update_network_warm_spare_settings_request_instance = UpdateNetworkWarmSpareSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWarmSpareSettingsRequest.to_json())

# convert the object into a dict
update_network_warm_spare_settings_request_dict = update_network_warm_spare_settings_request_instance.to_dict()
# create an instance of UpdateNetworkWarmSpareSettingsRequest from a dict
update_network_warm_spare_settings_request_from_dict = UpdateNetworkWarmSpareSettingsRequest.from_dict(update_network_warm_spare_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


