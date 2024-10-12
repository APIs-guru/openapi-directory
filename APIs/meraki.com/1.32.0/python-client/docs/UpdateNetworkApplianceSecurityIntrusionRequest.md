# UpdateNetworkApplianceSecurityIntrusionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids_rulesets** | **str** | Set the detection ruleset &#39;connectivity&#39;/&#39;balanced&#39;/&#39;security&#39; (optional - omitting will leave current config unchanged). Default value is &#39;balanced&#39; if none currently saved | [optional] 
**mode** | **str** | Set mode to &#39;disabled&#39;/&#39;detection&#39;/&#39;prevention&#39; (optional - omitting will leave current config unchanged) | [optional] 
**protected_networks** | [**UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks**](UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_security_intrusion_request import UpdateNetworkApplianceSecurityIntrusionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSecurityIntrusionRequest from a JSON string
update_network_appliance_security_intrusion_request_instance = UpdateNetworkApplianceSecurityIntrusionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSecurityIntrusionRequest.to_json())

# convert the object into a dict
update_network_appliance_security_intrusion_request_dict = update_network_appliance_security_intrusion_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceSecurityIntrusionRequest from a dict
update_network_appliance_security_intrusion_request_from_dict = UpdateNetworkApplianceSecurityIntrusionRequest.from_dict(update_network_appliance_security_intrusion_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


