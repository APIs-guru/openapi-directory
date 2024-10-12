# GetIamPolicyRequest

Request message for `GetIamPolicy` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**GetPolicyOptions**](GetPolicyOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_iam_policy_request import GetIamPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetIamPolicyRequest from a JSON string
get_iam_policy_request_instance = GetIamPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GetIamPolicyRequest.to_json())

# convert the object into a dict
get_iam_policy_request_dict = get_iam_policy_request_instance.to_dict()
# create an instance of GetIamPolicyRequest from a dict
get_iam_policy_request_from_dict = GetIamPolicyRequest.from_dict(get_iam_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


