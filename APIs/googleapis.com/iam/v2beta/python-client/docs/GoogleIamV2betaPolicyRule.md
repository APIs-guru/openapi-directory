# GoogleIamV2betaPolicyRule

A single rule in a `Policy`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deny_rule** | [**GoogleIamV2betaDenyRule**](GoogleIamV2betaDenyRule.md) |  | [optional] 
**description** | **str** | A user-specified description of the rule. This value can be up to 256 characters. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v2beta_policy_rule import GoogleIamV2betaPolicyRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV2betaPolicyRule from a JSON string
google_iam_v2beta_policy_rule_instance = GoogleIamV2betaPolicyRule.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV2betaPolicyRule.to_json())

# convert the object into a dict
google_iam_v2beta_policy_rule_dict = google_iam_v2beta_policy_rule_instance.to_dict()
# create an instance of GoogleIamV2betaPolicyRule from a dict
google_iam_v2beta_policy_rule_from_dict = GoogleIamV2betaPolicyRule.from_dict(google_iam_v2beta_policy_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


