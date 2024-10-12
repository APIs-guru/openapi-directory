# PolicyBinding

Grouping of IAM role and IAM member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member** | **str** | Required. Member to bind the role with. See /iam/docs/reference/rest/v1/Policy#Binding for how to format each member. Eg. - user:myuser@mydomain.com - serviceAccount:my-service-account@app.gserviceaccount.com | [optional] 
**role** | **str** | Required. Role to apply. Only allowlisted roles can be used at the specified granularity. The role must be one of the following: - &#39;roles/container.hostServiceAgentUser&#39; applied on the shared VPC host project - &#39;roles/compute.securityAdmin&#39; applied on the shared VPC host project - &#39;roles/compute.networkAdmin&#39; applied on the shared VPC host project - &#39;roles/compute.xpnAdmin&#39; applied on the shared VPC host project - &#39;roles/dns.admin&#39; applied on the shared VPC host project | [optional] 

## Example

```python
from openapi_client.models.policy_binding import PolicyBinding

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyBinding from a JSON string
policy_binding_instance = PolicyBinding.from_json(json)
# print the JSON string representation of the object
print(PolicyBinding.to_json())

# convert the object into a dict
policy_binding_dict = policy_binding_instance.to_dict()
# create an instance of PolicyBinding from a dict
policy_binding_from_dict = PolicyBinding.from_dict(policy_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


