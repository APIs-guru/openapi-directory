# VpnClientIPsecParameters

An IPSec parameters for a virtual network gateway P2S connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dh_group** | **str** | The DH Groups used in IKE Phase 1 for initial SA. | 
**ike_encryption** | **str** | The IKE encryption algorithm (IKE phase 2). | 
**ike_integrity** | **str** | The IKE integrity algorithm (IKE phase 2). | 
**ipsec_encryption** | **str** | The IPSec encryption algorithm (IKE phase 1). | 
**ipsec_integrity** | **str** | The IPSec integrity algorithm (IKE phase 1). | 
**pfs_group** | **str** | The Pfs Groups used in IKE Phase 2 for new child SA. | 
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


