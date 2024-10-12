# FirewallPoliciesUpdateTagsDefaultResponseDetailsInner

Common error details representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.firewall_policies_update_tags_default_response_details_inner import FirewallPoliciesUpdateTagsDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPoliciesUpdateTagsDefaultResponseDetailsInner from a JSON string
firewall_policies_update_tags_default_response_details_inner_instance = FirewallPoliciesUpdateTagsDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(FirewallPoliciesUpdateTagsDefaultResponseDetailsInner.to_json())

# convert the object into a dict
firewall_policies_update_tags_default_response_details_inner_dict = firewall_policies_update_tags_default_response_details_inner_instance.to_dict()
# create an instance of FirewallPoliciesUpdateTagsDefaultResponseDetailsInner from a dict
firewall_policies_update_tags_default_response_details_inner_from_dict = FirewallPoliciesUpdateTagsDefaultResponseDetailsInner.from_dict(firewall_policies_update_tags_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


