# ListAllAggregatedIssuesRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exploit_maturity** | **List[object]** | The exploit maturity levels of issues to filter the results by (Non-IaC projects only) | [optional] 
**ignored** | **bool** | If set to &#x60;true&#x60;, only include issues which are ignored, if set to &#x60;false&#x60;, only include issues which are not ignored | [optional] 
**patched** | **bool** | If set to &#x60;true&#x60;, only include issues which are patched, if set to &#x60;false&#x60;, only include issues which are not patched (Non-IaC projects only) | [optional] 
**priority** | [**ListAllAggregatedIssuesRequestFiltersPriority**](ListAllAggregatedIssuesRequestFiltersPriority.md) |  | [optional] 
**severities** | **List[object]** | The severity levels of issues to filter the results by | [optional] 
**types** | **List[object]** | The type of issues to filter the results by (Non-IaC projects only) | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues_request_filters import ListAllAggregatedIssuesRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssuesRequestFilters from a JSON string
list_all_aggregated_issues_request_filters_instance = ListAllAggregatedIssuesRequestFilters.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssuesRequestFilters.to_json())

# convert the object into a dict
list_all_aggregated_issues_request_filters_dict = list_all_aggregated_issues_request_filters_instance.to_dict()
# create an instance of ListAllAggregatedIssuesRequestFilters from a dict
list_all_aggregated_issues_request_filters_from_dict = ListAllAggregatedIssuesRequestFilters.from_dict(list_all_aggregated_issues_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


