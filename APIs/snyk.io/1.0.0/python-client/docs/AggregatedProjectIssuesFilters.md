# AggregatedProjectIssuesFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ListAllAggregatedIssuesRequestFilters**](ListAllAggregatedIssuesRequestFilters.md) |  | [optional] 
**include_description** | **bool** | If set to &#x60;true&#x60;, Include issue&#39;s description, if set to &#x60;false&#x60; (by default), it won&#39;t (Non-IaC projects only) | [optional] 
**include_introduced_through** | **bool** | If set to &#x60;true&#x60;, Include issue&#39;s introducedThrough, if set to &#x60;false&#x60; (by default), it won&#39;t. It&#39;s for container only projects (Non-IaC projects only) | [optional] 

## Example

```python
from openapi_client.models.aggregated_project_issues_filters import AggregatedProjectIssuesFilters

# TODO update the JSON string below
json = "{}"
# create an instance of AggregatedProjectIssuesFilters from a JSON string
aggregated_project_issues_filters_instance = AggregatedProjectIssuesFilters.from_json(json)
# print the JSON string representation of the object
print(AggregatedProjectIssuesFilters.to_json())

# convert the object into a dict
aggregated_project_issues_filters_dict = aggregated_project_issues_filters_instance.to_dict()
# create an instance of AggregatedProjectIssuesFilters from a dict
aggregated_project_issues_filters_from_dict = AggregatedProjectIssuesFilters.from_dict(aggregated_project_issues_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


