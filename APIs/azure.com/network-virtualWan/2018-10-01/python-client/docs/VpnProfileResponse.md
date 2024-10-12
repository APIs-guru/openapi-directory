# VpnProfileResponse

Vpn Profile Response for package generation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_url** | **str** | URL to the VPN profile | [optional] 

## Example

```python
from openapi_client.models.vpn_profile_response import VpnProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VpnProfileResponse from a JSON string
vpn_profile_response_instance = VpnProfileResponse.from_json(json)
# print the JSON string representation of the object
print(VpnProfileResponse.to_json())

# convert the object into a dict
vpn_profile_response_dict = vpn_profile_response_instance.to_dict()
# create an instance of VpnProfileResponse from a dict
vpn_profile_response_from_dict = VpnProfileResponse.from_dict(vpn_profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


