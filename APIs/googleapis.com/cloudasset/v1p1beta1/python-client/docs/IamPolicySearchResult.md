# IamPolicySearchResult

The result for an IAM policy search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanation** | [**Explanation**](Explanation.md) |  | [optional] 
**policy** | [**Policy**](Policy.md) |  | [optional] 
**project** | **str** | The project that the associated Google Cloud resource belongs to, in the form of &#x60;projects/{project_number}&#x60;. If an IAM policy is set on a resource -- such as a Compute Engine instance or a Cloud Storage bucket -- the project field will indicate the project that contains the resource. If an IAM policy is set on a folder or orgnization, the project field will be empty. | [optional] 
**resource** | **str** | The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the resource associated with this IAM policy. | [optional] 

## Example

```python
from openapi_client.models.iam_policy_search_result import IamPolicySearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of IamPolicySearchResult from a JSON string
iam_policy_search_result_instance = IamPolicySearchResult.from_json(json)
# print the JSON string representation of the object
print(IamPolicySearchResult.to_json())

# convert the object into a dict
iam_policy_search_result_dict = iam_policy_search_result_instance.to_dict()
# create an instance of IamPolicySearchResult from a dict
iam_policy_search_result_from_dict = IamPolicySearchResult.from_dict(iam_policy_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


