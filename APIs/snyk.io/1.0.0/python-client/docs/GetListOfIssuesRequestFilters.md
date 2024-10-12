# GetListOfIssuesRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exploit_maturity** | **List[object]** | The exploit maturity levels of issues to filter the results by | [optional] 
**fixable** | **bool** | If set to &#x60;true&#x60;, only include issues which are fixable, if set to &#x60;false&#x60;, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters. | [optional] 
**identifier** | **str** | Search term to filter issue name by, or an exact CVE or CWE | [optional] 
**ignored** | **bool** | If set to &#x60;true&#x60;, only include issues which are ignored, if set to &#x60;false&#x60;, only include issues which are not ignored | [optional] 
**is_fixed** | **bool** | If set to &#x60;true&#x60;, only include issues which are fixed, if set to &#x60;false&#x60;, only include issues which are not fixed | [optional] 
**is_patchable** | **bool** | If set to &#x60;true&#x60;, only include issues which are patchable, if set to &#x60;false&#x60;, only include issues which are not patchable | [optional] 
**is_pinnable** | **bool** | If set to &#x60;true&#x60;, only include issues which are pinnable, if set to &#x60;false&#x60;, only include issues which are not pinnable | [optional] 
**is_upgradable** | **bool** | If set to &#x60;true&#x60;, only include issues which are upgradable, if set to &#x60;false&#x60;, only include issues which are not upgradable | [optional] 
**issues** | **object** | The list of issue IDs to filter issues by | [optional] 
**languages** | **List[object]** | The type of languages to filter the results by | [optional] 
**orgs** | **object** | The list of org IDs to filter the results by | 
**patched** | **bool** | If set to &#x60;true&#x60;, only include issues which are patched, if set to &#x60;false&#x60;, only include issues which are not patched | [optional] 
**priority_score** | [**GetIssueCountsRequestFiltersPriorityScore**](GetIssueCountsRequestFiltersPriorityScore.md) |  | [optional] 
**projects** | **object** | The list of project IDs to filter issues by, max projects allowed is 1000 | [optional] 
**severity** | **List[object]** | The severity levels of issues to filter the results by | [optional] 
**types** | **List[object]** | The type of issues to filter the results by | [optional] 

## Example

```python
from openapi_client.models.get_list_of_issues_request_filters import GetListOfIssuesRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfIssuesRequestFilters from a JSON string
get_list_of_issues_request_filters_instance = GetListOfIssuesRequestFilters.from_json(json)
# print the JSON string representation of the object
print(GetListOfIssuesRequestFilters.to_json())

# convert the object into a dict
get_list_of_issues_request_filters_dict = get_list_of_issues_request_filters_instance.to_dict()
# create an instance of GetListOfIssuesRequestFilters from a dict
get_list_of_issues_request_filters_from_dict = GetListOfIssuesRequestFilters.from_dict(get_list_of_issues_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


