# EffectiveIamPolicy

The effective IAM policies on one resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_resource_name** | **str** | The [full_resource_name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) for which the policies are computed. This is one of the BatchGetEffectiveIamPoliciesRequest.names the caller provides in the request. | [optional] 
**policies** | [**List[PolicyInfo]**](PolicyInfo.md) | The effective policies for the full_resource_name. These policies include the policy set on the full_resource_name and those set on its parents and ancestors up to the BatchGetEffectiveIamPoliciesRequest.scope. Note that these policies are not filtered according to the resource type of the full_resource_name. These policies are hierarchically ordered by PolicyInfo.attached_resource starting from full_resource_name itself to its parents and ancestors, such that policies[i]&#39;s PolicyInfo.attached_resource is the child of policies[i+1]&#39;s PolicyInfo.attached_resource, if policies[i+1] exists. | [optional] 

## Example

```python
from openapi_client.models.effective_iam_policy import EffectiveIamPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveIamPolicy from a JSON string
effective_iam_policy_instance = EffectiveIamPolicy.from_json(json)
# print the JSON string representation of the object
print(EffectiveIamPolicy.to_json())

# convert the object into a dict
effective_iam_policy_dict = effective_iam_policy_instance.to_dict()
# create an instance of EffectiveIamPolicy from a dict
effective_iam_policy_from_dict = EffectiveIamPolicy.from_dict(effective_iam_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


