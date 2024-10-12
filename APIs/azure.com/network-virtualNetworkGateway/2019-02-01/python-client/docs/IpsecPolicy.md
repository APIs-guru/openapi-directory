# IpsecPolicy

An IPSec Policy configuration for a virtual network gateway connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dh_group** | [**DhGroup**](DhGroup.md) |  | 
**ike_encryption** | [**IkeEncryption**](IkeEncryption.md) |  | 
**ike_integrity** | [**IkeIntegrity**](IkeIntegrity.md) |  | 
**ipsec_encryption** | [**IpsecEncryption**](IpsecEncryption.md) |  | 
**ipsec_integrity** | [**IpsecIntegrity**](IpsecIntegrity.md) |  | 
**pfs_group** | [**PfsGroup**](PfsGroup.md) |  | 
**sa_data_size_kilobytes** | **int** | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | 
**sa_life_time_seconds** | **int** | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | 

## Example

```python
from openapi_client.models.ipsec_policy import IpsecPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IpsecPolicy from a JSON string
ipsec_policy_instance = IpsecPolicy.from_json(json)
# print the JSON string representation of the object
print(IpsecPolicy.to_json())

# convert the object into a dict
ipsec_policy_dict = ipsec_policy_instance.to_dict()
# create an instance of IpsecPolicy from a dict
ipsec_policy_from_dict = IpsecPolicy.from_dict(ipsec_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


