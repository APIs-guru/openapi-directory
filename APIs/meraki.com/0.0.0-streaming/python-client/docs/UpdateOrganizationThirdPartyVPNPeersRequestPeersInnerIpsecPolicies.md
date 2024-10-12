# UpdateOrganizationThirdPartyVPNPeersRequestPeersInnerIpsecPolicies

Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_auth_algo** | **List[str]** | This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: &#39;sha256&#39;, &#39;sha1&#39;, &#39;md5&#39; | [optional] 
**child_cipher_algo** | **List[str]** | This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: &#39;aes256&#39;, &#39;aes192&#39;, &#39;aes128&#39;, &#39;tripledes&#39;, &#39;des&#39;, &#39;null&#39; | [optional] 
**child_lifetime** | **int** | The lifetime of the Phase 2 SA in seconds. | [optional] 
**child_pfs_group** | **List[str]** | This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: &#39;disabled&#39;,&#39;group14&#39;, &#39;group5&#39;, &#39;group2&#39;, &#39;group1&#39; | [optional] 
**ike_auth_algo** | **List[str]** | This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: &#39;sha256&#39;, &#39;sha1&#39;, &#39;md5&#39; | [optional] 
**ike_cipher_algo** | **List[str]** | This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: &#39;aes256&#39;, &#39;aes192&#39;, &#39;aes128&#39;, &#39;tripledes&#39;, &#39;des&#39; | [optional] 
**ike_diffie_hellman_group** | **List[str]** | This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: &#39;group14&#39;, &#39;group5&#39;, &#39;group2&#39;, &#39;group1&#39; | [optional] 
**ike_lifetime** | **int** | The lifetime of the Phase 1 SA in seconds. | [optional] 
**ike_prf_algo** | **List[str]** | [optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: &#39;prfsha256&#39;, &#39;prfsha1&#39;, &#39;prfmd5&#39;, &#39;default&#39;. The &#39;default&#39; option can be used to default to the Authentication algorithm. | [optional] 

## Example

```python
from openapi_client.models.update_organization_third_party_vpn_peers_request_peers_inner_ipsec_policies import UpdateOrganizationThirdPartyVPNPeersRequestPeersInnerIpsecPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationThirdPartyVPNPeersRequestPeersInnerIpsecPolicies from a JSON string
update_organization_third_party_vpn_peers_request_peers_inner_ipsec_policies_instance = UpdateOrganizationThirdPartyVPNPeersRequestPeersInnerIpsecPolicies.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationThirdPartyVPNPeersRequestPeersInnerIpsecPolicies.to_json())

# convert the object into a dict
update_organization_third_party_vpn_peers_request_peers_inner_ipsec_policies_dict = update_organization_third_party_vpn_peers_request_peers_inner_ipsec_policies_instance.to_dict()
# create an instance of UpdateOrganizationThirdPartyVPNPeersRequestPeersInnerIpsecPolicies from a dict
update_organization_third_party_vpn_peers_request_peers_inner_ipsec_policies_from_dict = UpdateOrganizationThirdPartyVPNPeersRequestPeersInnerIpsecPolicies.from_dict(update_organization_third_party_vpn_peers_request_peers_inner_ipsec_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


