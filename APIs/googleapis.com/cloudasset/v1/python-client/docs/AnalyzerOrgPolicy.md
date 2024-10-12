# AnalyzerOrgPolicy

This organization policy message is a modified version of the one defined in the Organization Policy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_resource** | **str** | The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource where this organization policy applies to. For any user defined org policies, this field has the same value as the [attached_resource] field. Only for default policy, this field has the different value. | [optional] 
**attached_resource** | **str** | The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource where this organization policy is set. Notice that some type of constraints are defined with default policy. This field will be empty for them. | [optional] 
**inherit_from_parent** | **bool** | If &#x60;inherit_from_parent&#x60; is true, Rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the effective root for evaluation. | [optional] 
**reset** | **bool** | Ignores policies set above this resource and restores the default behavior of the constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, &#x60;rules&#x60; must be empty and &#x60;inherit_from_parent&#x60; must be set to false. | [optional] 
**rules** | [**List[GoogleCloudAssetV1Rule]**](GoogleCloudAssetV1Rule.md) | List of rules for this organization policy. | [optional] 

## Example

```python
from openapi_client.models.analyzer_org_policy import AnalyzerOrgPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzerOrgPolicy from a JSON string
analyzer_org_policy_instance = AnalyzerOrgPolicy.from_json(json)
# print the JSON string representation of the object
print(AnalyzerOrgPolicy.to_json())

# convert the object into a dict
analyzer_org_policy_dict = analyzer_org_policy_instance.to_dict()
# create an instance of AnalyzerOrgPolicy from a dict
analyzer_org_policy_from_dict = AnalyzerOrgPolicy.from_dict(analyzer_org_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


