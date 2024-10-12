# LintPolicyResponse

The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lint_results** | [**List[LintResult]**](LintResult.md) | List of lint results sorted by &#x60;severity&#x60; in descending order. | [optional] 

## Example

```python
from openapi_client.models.lint_policy_response import LintPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LintPolicyResponse from a JSON string
lint_policy_response_instance = LintPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(LintPolicyResponse.to_json())

# convert the object into a dict
lint_policy_response_dict = lint_policy_response_instance.to_dict()
# create an instance of LintPolicyResponse from a dict
lint_policy_response_from_dict = LintPolicyResponse.from_dict(lint_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


