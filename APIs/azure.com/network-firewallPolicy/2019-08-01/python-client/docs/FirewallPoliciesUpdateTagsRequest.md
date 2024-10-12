# FirewallPoliciesUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.firewall_policies_update_tags_request import FirewallPoliciesUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPoliciesUpdateTagsRequest from a JSON string
firewall_policies_update_tags_request_instance = FirewallPoliciesUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(FirewallPoliciesUpdateTagsRequest.to_json())

# convert the object into a dict
firewall_policies_update_tags_request_dict = firewall_policies_update_tags_request_instance.to_dict()
# create an instance of FirewallPoliciesUpdateTagsRequest from a dict
firewall_policies_update_tags_request_from_dict = FirewallPoliciesUpdateTagsRequest.from_dict(firewall_policies_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


