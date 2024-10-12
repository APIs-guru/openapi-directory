# RemoveIamPolicyResponse

Response message for DataprocMetastore.RemoveIamPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | True if the policy is successfully removed. | [optional] 

## Example

```python
from openapi_client.models.remove_iam_policy_response import RemoveIamPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveIamPolicyResponse from a JSON string
remove_iam_policy_response_instance = RemoveIamPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(RemoveIamPolicyResponse.to_json())

# convert the object into a dict
remove_iam_policy_response_dict = remove_iam_policy_response_instance.to_dict()
# create an instance of RemoveIamPolicyResponse from a dict
remove_iam_policy_response_from_dict = RemoveIamPolicyResponse.from_dict(remove_iam_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


