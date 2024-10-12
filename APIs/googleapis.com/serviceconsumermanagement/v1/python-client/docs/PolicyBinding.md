# PolicyBinding

Translates to IAM Policy bindings (without auditing at this level)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | **List[str]** | Uses the same format as in IAM policy. &#x60;member&#x60; must include both a prefix and ID. For example, &#x60;user:{emailId}&#x60;, &#x60;serviceAccount:{emailId}&#x60;, &#x60;group:{emailId}&#x60;. | [optional] 
**role** | **str** | Role. (https://cloud.google.com/iam/docs/understanding-roles) For example, &#x60;roles/viewer&#x60;, &#x60;roles/editor&#x60;, or &#x60;roles/owner&#x60;. | [optional] 

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


