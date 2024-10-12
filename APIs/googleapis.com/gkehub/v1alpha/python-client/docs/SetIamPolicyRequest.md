# SetIamPolicyRequest

Request message for `SetIamPolicy` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**Policy**](Policy.md) |  | [optional] 
**update_mask** | **str** | OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: &#x60;paths: \&quot;bindings, etag\&quot;&#x60; | [optional] 

## Example

```python
from openapi_client.models.set_iam_policy_request import SetIamPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetIamPolicyRequest from a JSON string
set_iam_policy_request_instance = SetIamPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(SetIamPolicyRequest.to_json())

# convert the object into a dict
set_iam_policy_request_dict = set_iam_policy_request_instance.to_dict()
# create an instance of SetIamPolicyRequest from a dict
set_iam_policy_request_from_dict = SetIamPolicyRequest.from_dict(set_iam_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


