# ListAllAggregatedIssues200ResponseIssuesInnerFixInfo

Information about fix/upgrade/pinnable options for the issue (Non-IaC projects only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_in** | **List[object]** | The set of versions in which this issue has been fixed. If the issue spanned multiple versions (i.e. &#x60;1.x&#x60; and &#x60;2.x&#x60;) then there will be multiple &#x60;fixedIn&#x60; entries | [optional] 
**is_fixable** | **bool** | Whether all of the issue&#39;s paths are fixable. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading). An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it. | [optional] 
**is_partially_fixable** | **bool** | Whether any of the issue&#39;s paths can be fixed. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading).  An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it. | [optional] 
**is_patchable** | **bool** | Whether all the of issue&#39;s paths are patchable | [optional] 
**is_pinnable** | **bool** | Whether the issue can be fixed by pinning a transitive | [optional] 
**is_upgradable** | **bool** | Whether all of the issue&#39;s paths are upgradable | [optional] 
**nearest_fixed_in_version** | **str** | Nearest version which includes a fix for the issue. This is populated for container projects only. | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues200_response_issues_inner_fix_info import ListAllAggregatedIssues200ResponseIssuesInnerFixInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerFixInfo from a JSON string
list_all_aggregated_issues200_response_issues_inner_fix_info_instance = ListAllAggregatedIssues200ResponseIssuesInnerFixInfo.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssues200ResponseIssuesInnerFixInfo.to_json())

# convert the object into a dict
list_all_aggregated_issues200_response_issues_inner_fix_info_dict = list_all_aggregated_issues200_response_issues_inner_fix_info_instance.to_dict()
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerFixInfo from a dict
list_all_aggregated_issues200_response_issues_inner_fix_info_from_dict = ListAllAggregatedIssues200ResponseIssuesInnerFixInfo.from_dict(list_all_aggregated_issues200_response_issues_inner_fix_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


