# VpnConnectionPropertiesIpsecPoliciesInner

An IPSec Policy configuration for a virtual network gateway connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dh_group** | **str** | The DH Groups used in IKE Phase 1 for initial SA. | 
**ike_encryption** | **str** | The IKE encryption algorithm (IKE phase 2). | 
**ike_integrity** | **str** | The IKE integrity algorithm (IKE phase 2). | 
**ipsec_encryption** | **str** | The IPSec encryption algorithm (IKE phase 1). | 
**ipsec_integrity** | **str** | The IPSec integrity algorithm (IKE phase 1). | 
**pfs_group** | **str** | The Pfs Groups used in IKE Phase 2 for new child SA. | 
**sa_data_size_kilobytes** | **int** | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | 
**sa_life_time_seconds** | **int** | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | 

## Example

```python
from openapi_client.models.vpn_connection_properties_ipsec_policies_inner import VpnConnectionPropertiesIpsecPoliciesInner

# TODO update the JSON string below
json = "{}"
# create an instance of VpnConnectionPropertiesIpsecPoliciesInner from a JSON string
vpn_connection_properties_ipsec_policies_inner_instance = VpnConnectionPropertiesIpsecPoliciesInner.from_json(json)
# print the JSON string representation of the object
print(VpnConnectionPropertiesIpsecPoliciesInner.to_json())

# convert the object into a dict
vpn_connection_properties_ipsec_policies_inner_dict = vpn_connection_properties_ipsec_policies_inner_instance.to_dict()
# create an instance of VpnConnectionPropertiesIpsecPoliciesInner from a dict
vpn_connection_properties_ipsec_policies_inner_from_dict = VpnConnectionPropertiesIpsecPoliciesInner.from_dict(vpn_connection_properties_ipsec_policies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


