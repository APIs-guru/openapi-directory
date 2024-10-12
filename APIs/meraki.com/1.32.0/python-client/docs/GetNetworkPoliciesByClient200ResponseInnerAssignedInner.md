# GetNetworkPoliciesByClient200ResponseInnerAssignedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_policy_id** | **str** | id of policy | [optional] 
**name** | **str** | name of policy | [optional] 
**ssid** | [**List[GetNetworkPoliciesByClient200ResponseInnerAssignedInnerSsidInner]**](GetNetworkPoliciesByClient200ResponseInnerAssignedInnerSsidInner.md) | ssid | [optional] 
**type** | **str** | type of policy | [optional] 

## Example

```python
from openapi_client.models.get_network_policies_by_client200_response_inner_assigned_inner import GetNetworkPoliciesByClient200ResponseInnerAssignedInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkPoliciesByClient200ResponseInnerAssignedInner from a JSON string
get_network_policies_by_client200_response_inner_assigned_inner_instance = GetNetworkPoliciesByClient200ResponseInnerAssignedInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkPoliciesByClient200ResponseInnerAssignedInner.to_json())

# convert the object into a dict
get_network_policies_by_client200_response_inner_assigned_inner_dict = get_network_policies_by_client200_response_inner_assigned_inner_instance.to_dict()
# create an instance of GetNetworkPoliciesByClient200ResponseInnerAssignedInner from a dict
get_network_policies_by_client200_response_inner_assigned_inner_from_dict = GetNetworkPoliciesByClient200ResponseInnerAssignedInner.from_dict(get_network_policies_by_client200_response_inner_assigned_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


