# GetNetworkSmTrustedAccessConfigs200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_end_at** | **datetime** | time that access ends | [optional] 
**access_start_at** | **datetime** | time that access starts | [optional] 
**id** | **str** | device ID | [optional] 
**name** | **str** | device name | [optional] 
**scope** | **str** | scope | [optional] 
**ssid_name** | **str** | SSID name | [optional] 
**tags** | **List[str]** | device tags | [optional] 
**timebound_type** | **str** | type of access period, either a static range or a dynamic period | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_trusted_access_configs200_response_inner import GetNetworkSmTrustedAccessConfigs200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmTrustedAccessConfigs200ResponseInner from a JSON string
get_network_sm_trusted_access_configs200_response_inner_instance = GetNetworkSmTrustedAccessConfigs200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmTrustedAccessConfigs200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_trusted_access_configs200_response_inner_dict = get_network_sm_trusted_access_configs200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmTrustedAccessConfigs200ResponseInner from a dict
get_network_sm_trusted_access_configs200_response_inner_from_dict = GetNetworkSmTrustedAccessConfigs200ResponseInner.from_dict(get_network_sm_trusted_access_configs200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


