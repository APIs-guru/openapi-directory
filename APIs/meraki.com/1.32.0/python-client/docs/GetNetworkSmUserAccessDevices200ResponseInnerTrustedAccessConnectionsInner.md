# GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downloaded_at** | **str** | time that config was downloaded | [optional] 
**last_connected_at** | **datetime** | time of last connection | [optional] 
**scep_completed_at** | **datetime** | time that SCEP completed | [optional] 
**trusted_access_config_id** | **str** | config id | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_user_access_devices200_response_inner_trusted_access_connections_inner import GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner from a JSON string
get_network_sm_user_access_devices200_response_inner_trusted_access_connections_inner_instance = GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner.to_json())

# convert the object into a dict
get_network_sm_user_access_devices200_response_inner_trusted_access_connections_inner_dict = get_network_sm_user_access_devices200_response_inner_trusted_access_connections_inner_instance.to_dict()
# create an instance of GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner from a dict
get_network_sm_user_access_devices200_response_inner_trusted_access_connections_inner_from_dict = GetNetworkSmUserAccessDevices200ResponseInnerTrustedAccessConnectionsInner.from_dict(get_network_sm_user_access_devices200_response_inner_trusted_access_connections_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


