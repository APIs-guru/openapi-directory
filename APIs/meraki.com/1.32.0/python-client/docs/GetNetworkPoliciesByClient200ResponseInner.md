# GetNetworkPoliciesByClient200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned** | [**List[GetNetworkPoliciesByClient200ResponseInnerAssignedInner]**](GetNetworkPoliciesByClient200ResponseInnerAssignedInner.md) | Assigned policies | [optional] 
**client_id** | **str** | ID of client | [optional] 
**name** | **str** | Name of client | [optional] 

## Example

```python
from openapi_client.models.get_network_policies_by_client200_response_inner import GetNetworkPoliciesByClient200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkPoliciesByClient200ResponseInner from a JSON string
get_network_policies_by_client200_response_inner_instance = GetNetworkPoliciesByClient200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkPoliciesByClient200ResponseInner.to_json())

# convert the object into a dict
get_network_policies_by_client200_response_inner_dict = get_network_policies_by_client200_response_inner_instance.to_dict()
# create an instance of GetNetworkPoliciesByClient200ResponseInner from a dict
get_network_policies_by_client200_response_inner_from_dict = GetNetworkPoliciesByClient200ResponseInner.from_dict(get_network_policies_by_client200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


