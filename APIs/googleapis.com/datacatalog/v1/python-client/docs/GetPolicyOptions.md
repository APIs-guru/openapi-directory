# GetPolicyOptions

Encapsulates settings provided to GetIamPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_policy_version** | **int** | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). | [optional] 

## Example

```python
from openapi_client.models.get_policy_options import GetPolicyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GetPolicyOptions from a JSON string
get_policy_options_instance = GetPolicyOptions.from_json(json)
# print the JSON string representation of the object
print(GetPolicyOptions.to_json())

# convert the object into a dict
get_policy_options_dict = get_policy_options_instance.to_dict()
# create an instance of GetPolicyOptions from a dict
get_policy_options_from_dict = GetPolicyOptions.from_dict(get_policy_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


