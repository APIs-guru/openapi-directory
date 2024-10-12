# UpdateNetworkApplianceSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_tracking_method** | **str** | Client tracking method of a network | [optional] 
**deployment_mode** | **str** | Deployment mode of a network | [optional] 
**dynamic_dns** | [**UpdateNetworkApplianceSettingsRequestDynamicDns**](UpdateNetworkApplianceSettingsRequestDynamicDns.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_settings_request import UpdateNetworkApplianceSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSettingsRequest from a JSON string
update_network_appliance_settings_request_instance = UpdateNetworkApplianceSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSettingsRequest.to_json())

# convert the object into a dict
update_network_appliance_settings_request_dict = update_network_appliance_settings_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceSettingsRequest from a dict
update_network_appliance_settings_request_from_dict = UpdateNetworkApplianceSettingsRequest.from_dict(update_network_appliance_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


