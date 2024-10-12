# VpnClientIPsecParameters

An IPSec parameters for a virtual network gateway P2S connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dh_group** | [**DhGroup**](DhGroup.md) |  | 
**ike_encryption** | [**IkeEncryption**](IkeEncryption.md) |  | 
**ike_integrity** | [**IkeIntegrity**](IkeIntegrity.md) |  | 
**ipsec_encryption** | [**IpsecEncryption**](IpsecEncryption.md) |  | 
**ipsec_integrity** | [**IpsecIntegrity**](IpsecIntegrity.md) |  | 
**pfs_group** | [**PfsGroup**](PfsGroup.md) |  | 
**sa_data_size_kilobytes** | **int** | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for P2S client.. | 
**sa_life_time_seconds** | **int** | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for P2S client. | 

## Example

```python
from openapi_client.models.vpn_client_i_psec_parameters import VpnClientIPsecParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientIPsecParameters from a JSON string
vpn_client_i_psec_parameters_instance = VpnClientIPsecParameters.from_json(json)
# print the JSON string representation of the object
print(VpnClientIPsecParameters.to_json())

# convert the object into a dict
vpn_client_i_psec_parameters_dict = vpn_client_i_psec_parameters_instance.to_dict()
# create an instance of VpnClientIPsecParameters from a dict
vpn_client_i_psec_parameters_from_dict = VpnClientIPsecParameters.from_dict(vpn_client_i_psec_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


