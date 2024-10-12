# GoogleIamV1GetIamPolicyRequest

Request message for `GetIamPolicy` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**GoogleIamV1GetPolicyOptions**](GoogleIamV1GetPolicyOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_iam_v1_get_iam_policy_request import GoogleIamV1GetIamPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV1GetIamPolicyRequest from a JSON string
google_iam_v1_get_iam_policy_request_instance = GoogleIamV1GetIamPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV1GetIamPolicyRequest.to_json())

# convert the object into a dict
google_iam_v1_get_iam_policy_request_dict = google_iam_v1_get_iam_policy_request_instance.to_dict()
# create an instance of GoogleIamV1GetIamPolicyRequest from a dict
google_iam_v1_get_iam_policy_request_from_dict = GoogleIamV1GetIamPolicyRequest.from_dict(google_iam_v1_get_iam_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


