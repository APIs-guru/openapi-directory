# IssueCountsFiltersFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixable** | **bool** | If set to &#x60;true&#x60;, only include issues which are fixable, if set to &#x60;false&#x60;, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters. | [optional] 
**ignored** | **bool** | If set to &#x60;true&#x60;, only include issues which are ignored, if set to &#x60;false&#x60;, only include issues which are not ignored | [optional] 
**is_patchable** | **bool** | If set to &#x60;true&#x60;, only include issues which are patchable, if set to &#x60;false&#x60;, only include issues which are not patchable | [optional] 
**is_pinnable** | **bool** | If set to &#x60;true&#x60;, only include issues which are pinnable, if set to &#x60;false&#x60;, only include issues which are not pinnable | [optional] 
**is_upgradable** | **bool** | If set to &#x60;true&#x60;, only include issues which are upgradable, if set to &#x60;false&#x60;, only include issues which are not upgradable | [optional] 
**languages** | **List[object]** | The type of languages to filter the results by | [optional] 
**orgs** | **List[object]** | The list of org IDs to filter the results by | 
**patched** | **bool** | If set to &#x60;true&#x60;, only include issues which are patched, if set to &#x60;false&#x60;, only include issues which are not patched | [optional] 
**priority_score** | [**PriorityScore**](PriorityScore.md) |  | [optional] 
**projects** | **List[object]** | The list of project IDs to filter issues by, max projects allowed is 1000 | [optional] 
**severity** | **List[object]** | The severity levels of issues to filter the results by | [optional] 
**types** | **List[object]** | The type of issues to filter the results by | [optional] 

## Example

```python
from openapi_client.models.issue_counts_filters_filters import IssueCountsFiltersFilters

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCountsFiltersFilters from a JSON string
issue_counts_filters_filters_instance = IssueCountsFiltersFilters.from_json(json)
# print the JSON string representation of the object
print(IssueCountsFiltersFilters.to_json())

# convert the object into a dict
issue_counts_filters_filters_dict = issue_counts_filters_filters_instance.to_dict()
# create an instance of IssueCountsFiltersFilters from a dict
issue_counts_filters_filters_from_dict = IssueCountsFiltersFilters.from_dict(issue_counts_filters_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


