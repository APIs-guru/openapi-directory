# IpamVlanGroupsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[VLANGroup]**](VLANGroup.md) |  | 

## Example

```python
from openapi_client.models.ipam_vlan_groups_list200_response import IpamVlanGroupsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IpamVlanGroupsList200Response from a JSON string
ipam_vlan_groups_list200_response_instance = IpamVlanGroupsList200Response.from_json(json)
# print the JSON string representation of the object
print(IpamVlanGroupsList200Response.to_json())

# convert the object into a dict
ipam_vlan_groups_list200_response_dict = ipam_vlan_groups_list200_response_instance.to_dict()
# create an instance of IpamVlanGroupsList200Response from a dict
ipam_vlan_groups_list200_response_from_dict = IpamVlanGroupsList200Response.from_dict(ipam_vlan_groups_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


