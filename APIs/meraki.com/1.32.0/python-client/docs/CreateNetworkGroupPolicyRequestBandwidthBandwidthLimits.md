# CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits

The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | The maximum download limit (integer, in Kbps). null indicates no limit | [optional] 
**limit_up** | **int** | The maximum upload limit (integer, in Kbps). null indicates no limit | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_bandwidth_bandwidth_limits import CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits from a JSON string
create_network_group_policy_request_bandwidth_bandwidth_limits_instance = CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits.to_json())

# convert the object into a dict
create_network_group_policy_request_bandwidth_bandwidth_limits_dict = create_network_group_policy_request_bandwidth_bandwidth_limits_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits from a dict
create_network_group_policy_request_bandwidth_bandwidth_limits_from_dict = CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits.from_dict(create_network_group_policy_request_bandwidth_bandwidth_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


