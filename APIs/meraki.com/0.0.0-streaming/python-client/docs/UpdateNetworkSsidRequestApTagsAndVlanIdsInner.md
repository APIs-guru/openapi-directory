# UpdateNetworkSsidRequestApTagsAndVlanIdsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **str** | Comma-separated list of AP tags | [optional] 
**vlan_id** | **int** | Numerical identifier that is assigned to the VLAN | [optional] 

## Example

```python
from openapi_client.models.update_network_ssid_request_ap_tags_and_vlan_ids_inner import UpdateNetworkSsidRequestApTagsAndVlanIdsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSsidRequestApTagsAndVlanIdsInner from a JSON string
update_network_ssid_request_ap_tags_and_vlan_ids_inner_instance = UpdateNetworkSsidRequestApTagsAndVlanIdsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSsidRequestApTagsAndVlanIdsInner.to_json())

# convert the object into a dict
update_network_ssid_request_ap_tags_and_vlan_ids_inner_dict = update_network_ssid_request_ap_tags_and_vlan_ids_inner_instance.to_dict()
# create an instance of UpdateNetworkSsidRequestApTagsAndVlanIdsInner from a dict
update_network_ssid_request_ap_tags_and_vlan_ids_inner_from_dict = UpdateNetworkSsidRequestApTagsAndVlanIdsInner.from_dict(update_network_ssid_request_ap_tags_and_vlan_ids_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


