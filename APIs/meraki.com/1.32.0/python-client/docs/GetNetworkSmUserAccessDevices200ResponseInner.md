# GetNetworkSmUserAccessDevices200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | user email | [optional] 
**id** | **str** | device ID | [optional] 
**mac** | **str** | mac address | [optional] 
**name** | **str** | device name | [optional] 
**system_type** | **str** | system type | [optional] 
**tags** | **List[str]** | device tags | [optional] 
**trusted_access_connections** | [**List[GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner]**](GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner.md) | Array of trusted access configs | [optional] 
**username** | **str** | username | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_user_access_devices200_response_inner import GetNetworkSmUserAccessDevices200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmUserAccessDevices200ResponseInner from a JSON string
get_network_sm_user_access_devices200_response_inner_instance = GetNetworkSmUserAccessDevices200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmUserAccessDevices200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_user_access_devices200_response_inner_dict = get_network_sm_user_access_devices200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmUserAccessDevices200ResponseInner from a dict
get_network_sm_user_access_devices200_response_inner_from_dict = GetNetworkSmUserAccessDevices200ResponseInner.from_dict(get_network_sm_user_access_devices200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


