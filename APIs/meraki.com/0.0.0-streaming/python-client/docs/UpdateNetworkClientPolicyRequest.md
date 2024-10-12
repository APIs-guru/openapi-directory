# UpdateNetworkClientPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_policy** | **str** | The policy to assign. Can be &#39;Whitelisted&#39;, &#39;Blocked&#39;, &#39;Normal&#39; or &#39;Group policy&#39;. Required. | 
**group_policy_id** | **str** | [optional] If &#39;devicePolicy&#39; is set to &#39;Group policy&#39; this param is used to specify the group policy ID. | [optional] 

## Example

```python
from openapi_client.models.update_network_client_policy_request import UpdateNetworkClientPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkClientPolicyRequest from a JSON string
update_network_client_policy_request_instance = UpdateNetworkClientPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkClientPolicyRequest.to_json())

# convert the object into a dict
update_network_client_policy_request_dict = update_network_client_policy_request_instance.to_dict()
# create an instance of UpdateNetworkClientPolicyRequest from a dict
update_network_client_policy_request_from_dict = UpdateNetworkClientPolicyRequest.from_dict(update_network_client_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


