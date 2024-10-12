# P2SVpnProfileParameters

Vpn Client Parameters for package generation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_method** | **str** | VPN client authentication method. | [optional] 

## Example

```python
from openapi_client.models.p2_s_vpn_profile_parameters import P2SVpnProfileParameters

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnProfileParameters from a JSON string
p2_s_vpn_profile_parameters_instance = P2SVpnProfileParameters.from_json(json)
# print the JSON string representation of the object
print(P2SVpnProfileParameters.to_json())

# convert the object into a dict
p2_s_vpn_profile_parameters_dict = p2_s_vpn_profile_parameters_instance.to_dict()
# create an instance of P2SVpnProfileParameters from a dict
p2_s_vpn_profile_parameters_from_dict = P2SVpnProfileParameters.from_dict(p2_s_vpn_profile_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


