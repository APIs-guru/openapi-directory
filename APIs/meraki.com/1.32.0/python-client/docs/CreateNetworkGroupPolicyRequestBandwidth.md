# CreateNetworkGroupPolicyRequestBandwidth

    The bandwidth settings for clients bound to your group policy. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limits** | [**CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits**](CreateNetworkGroupPolicyRequestBandwidthBandwidthLimits.md) |  | [optional] 
**settings** | **str** | How bandwidth limits are enforced. Can be &#39;network default&#39;, &#39;ignore&#39; or &#39;custom&#39;. | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_bandwidth import CreateNetworkGroupPolicyRequestBandwidth

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestBandwidth from a JSON string
create_network_group_policy_request_bandwidth_instance = CreateNetworkGroupPolicyRequestBandwidth.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestBandwidth.to_json())

# convert the object into a dict
create_network_group_policy_request_bandwidth_dict = create_network_group_policy_request_bandwidth_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestBandwidth from a dict
create_network_group_policy_request_bandwidth_from_dict = CreateNetworkGroupPolicyRequestBandwidth.from_dict(create_network_group_policy_request_bandwidth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


