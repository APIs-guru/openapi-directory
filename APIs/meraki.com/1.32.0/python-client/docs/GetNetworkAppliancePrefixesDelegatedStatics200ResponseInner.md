# GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Prefix creation time. | [optional] 
**description** | **str** | Identifying description for the prefix. | [optional] 
**origin** | [**GetNetworkAppliancePrefixesDelegatedStatics200ResponseInnerOrigin**](GetNetworkAppliancePrefixesDelegatedStatics200ResponseInnerOrigin.md) |  | [optional] 
**prefix** | **str** | IPv6 prefix/prefix length. | [optional] 
**static_delegated_prefix_id** | **str** | Static delegated prefix id. | [optional] 
**updated_at** | **datetime** | Prefix Updated time. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_prefixes_delegated_statics200_response_inner import GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner from a JSON string
get_network_appliance_prefixes_delegated_statics200_response_inner_instance = GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner.to_json())

# convert the object into a dict
get_network_appliance_prefixes_delegated_statics200_response_inner_dict = get_network_appliance_prefixes_delegated_statics200_response_inner_instance.to_dict()
# create an instance of GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner from a dict
get_network_appliance_prefixes_delegated_statics200_response_inner_from_dict = GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner.from_dict(get_network_appliance_prefixes_delegated_statics200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


