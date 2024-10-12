# RemoveIamPolicyRequest

Request message for DataprocMetastore.RemoveIamPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asynchronous** | **bool** | Optional. Removes IAM policy attached to database or table asynchronously when it is set. The default is false. | [optional] 

## Example

```python
from openapi_client.models.remove_iam_policy_request import RemoveIamPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveIamPolicyRequest from a JSON string
remove_iam_policy_request_instance = RemoveIamPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveIamPolicyRequest.to_json())

# convert the object into a dict
remove_iam_policy_request_dict = remove_iam_policy_request_instance.to_dict()
# create an instance of RemoveIamPolicyRequest from a dict
remove_iam_policy_request_from_dict = RemoveIamPolicyRequest.from_dict(remove_iam_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


