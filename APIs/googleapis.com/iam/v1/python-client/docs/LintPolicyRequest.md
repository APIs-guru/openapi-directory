# LintPolicyRequest

The request to lint a Cloud IAM policy object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**Expr**](Expr.md) |  | [optional] 
**full_resource_name** | **str** | The full resource name of the policy this lint request is about. The name follows the Google Cloud format for full resource names. For example, a Cloud project with ID &#x60;my-project&#x60; will be named &#x60;//cloudresourcemanager.googleapis.com/projects/my-project&#x60;. The resource name is not used to read a policy from IAM. Only the data in the request object is linted. | [optional] 

## Example

```python
from openapi_client.models.lint_policy_request import LintPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LintPolicyRequest from a JSON string
lint_policy_request_instance = LintPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(LintPolicyRequest.to_json())

# convert the object into a dict
lint_policy_request_dict = lint_policy_request_instance.to_dict()
# create an instance of LintPolicyRequest from a dict
lint_policy_request_from_dict = LintPolicyRequest.from_dict(lint_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


