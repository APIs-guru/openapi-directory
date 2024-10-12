# SubstitutionRule

A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_value** | **str** | Optional. This is the new value to set for any fields that pass the filtering and selection criteria. To remove a value from a Kubernetes resource, either leave this field unspecified, or set it to the empty string (\&quot;\&quot;). | [optional] 
**original_value_pattern** | **str** | Optional. (Filtering parameter) This is a [regular expression] (https://en.wikipedia.org/wiki/Regular_expression) that is compared against the fields matched by the target_json_path expression (and must also have passed the previous filters). Substitution will not be performed against fields whose value does not match this expression. If this field is NOT specified, then ALL fields matched by the target_json_path expression will undergo substitution. Note that an empty (e.g., \&quot;\&quot;, rather than unspecified) value for this field will only match empty fields. | [optional] 
**target_group_kinds** | [**List[GroupKind]**](GroupKind.md) | Optional. (Filtering parameter) Any resource subject to substitution must belong to one of the listed \&quot;types\&quot;. If this field is not provided, no type filtering will be performed (all resources of all types matching previous filtering parameters will be candidates for substitution). | [optional] 
**target_json_path** | **str** | Required. This is a [JSONPath] (https://kubernetes.io/docs/reference/kubectl/jsonpath/) expression that matches specific fields of candidate resources and it operates as both a filtering parameter (resources that are not matched with this expression will not be candidates for substitution) as well as a field identifier (identifies exactly which fields out of the candidate resources will be modified). | [optional] 
**target_namespaces** | **List[str]** | Optional. (Filtering parameter) Any resource subject to substitution must be contained within one of the listed Kubernetes Namespace in the Backup. If this field is not provided, no namespace filtering will be performed (all resources in all Namespaces, including all cluster-scoped resources, will be candidates for substitution). To mix cluster-scoped and namespaced resources in the same rule, use an empty string (\&quot;\&quot;) as one of the target namespaces. | [optional] 

## Example

```python
from openapi_client.models.substitution_rule import SubstitutionRule

# TODO update the JSON string below
json = "{}"
# create an instance of SubstitutionRule from a JSON string
substitution_rule_instance = SubstitutionRule.from_json(json)
# print the JSON string representation of the object
print(SubstitutionRule.to_json())

# convert the object into a dict
substitution_rule_dict = substitution_rule_instance.to_dict()
# create an instance of SubstitutionRule from a dict
substitution_rule_from_dict = SubstitutionRule.from_dict(substitution_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


