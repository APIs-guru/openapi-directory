# AnalyzerOrgPolicyConstraint

The organization policy constraint definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_constraint** | [**GoogleCloudAssetV1CustomConstraint**](GoogleCloudAssetV1CustomConstraint.md) |  | [optional] 
**google_defined_constraint** | [**GoogleCloudAssetV1Constraint**](GoogleCloudAssetV1Constraint.md) |  | [optional] 

## Example

```python
from openapi_client.models.analyzer_org_policy_constraint import AnalyzerOrgPolicyConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzerOrgPolicyConstraint from a JSON string
analyzer_org_policy_constraint_instance = AnalyzerOrgPolicyConstraint.from_json(json)
# print the JSON string representation of the object
print(AnalyzerOrgPolicyConstraint.to_json())

# convert the object into a dict
analyzer_org_policy_constraint_dict = analyzer_org_policy_constraint_instance.to_dict()
# create an instance of AnalyzerOrgPolicyConstraint from a dict
analyzer_org_policy_constraint_from_dict = AnalyzerOrgPolicyConstraint.from_dict(analyzer_org_policy_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


