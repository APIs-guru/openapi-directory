# GoogleIamV2PolicyRule

A single rule in a `Policy`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deny_rule** | [**GoogleIamV2DenyRule**](GoogleIamV2DenyRule.md) |  | [optional] 
**description** | **str** | A user-specified description of the rule. This value can be up to 256 characters. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v2_policy_rule import GoogleIamV2PolicyRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV2PolicyRule from a JSON string
google_iam_v2_policy_rule_instance = GoogleIamV2PolicyRule.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV2PolicyRule.to_json())

# convert the object into a dict
google_iam_v2_policy_rule_dict = google_iam_v2_policy_rule_instance.to_dict()
# create an instance of GoogleIamV2PolicyRule from a dict
google_iam_v2_policy_rule_from_dict = GoogleIamV2PolicyRule.from_dict(google_iam_v2_policy_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


