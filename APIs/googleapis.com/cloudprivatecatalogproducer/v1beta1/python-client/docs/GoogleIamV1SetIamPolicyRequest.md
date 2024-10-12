# GoogleIamV1SetIamPolicyRequest

Request message for `SetIamPolicy` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**GoogleIamV1Policy**](GoogleIamV1Policy.md) |  | [optional] 
**update_mask** | **str** | OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: \&quot;bindings, etag\&quot; This field is only used by Cloud IAM. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v1_set_iam_policy_request import GoogleIamV1SetIamPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV1SetIamPolicyRequest from a JSON string
google_iam_v1_set_iam_policy_request_instance = GoogleIamV1SetIamPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV1SetIamPolicyRequest.to_json())

# convert the object into a dict
google_iam_v1_set_iam_policy_request_dict = google_iam_v1_set_iam_policy_request_instance.to_dict()
# create an instance of GoogleIamV1SetIamPolicyRequest from a dict
google_iam_v1_set_iam_policy_request_from_dict = GoogleIamV1SetIamPolicyRequest.from_dict(google_iam_v1_set_iam_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


