# FirewallPoliciesUpdateTagsDefaultResponse

Common error representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**details** | [**List[FirewallPoliciesUpdateTagsDefaultResponseDetailsInner]**](FirewallPoliciesUpdateTagsDefaultResponseDetailsInner.md) | Error details. | [optional] 
**inner_error** | **str** | Inner error message. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.firewall_policies_update_tags_default_response import FirewallPoliciesUpdateTagsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPoliciesUpdateTagsDefaultResponse from a JSON string
firewall_policies_update_tags_default_response_instance = FirewallPoliciesUpdateTagsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(FirewallPoliciesUpdateTagsDefaultResponse.to_json())

# convert the object into a dict
firewall_policies_update_tags_default_response_dict = firewall_policies_update_tags_default_response_instance.to_dict()
# create an instance of FirewallPoliciesUpdateTagsDefaultResponse from a dict
firewall_policies_update_tags_default_response_from_dict = FirewallPoliciesUpdateTagsDefaultResponse.from_dict(firewall_policies_update_tags_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


