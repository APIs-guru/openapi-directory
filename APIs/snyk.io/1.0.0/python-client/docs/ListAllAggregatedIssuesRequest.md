# ListAllAggregatedIssuesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ListAllAggregatedIssuesRequestFilters**](ListAllAggregatedIssuesRequestFilters.md) |  | [optional] 
**include_description** | **bool** | If set to &#x60;true&#x60;, Include issue&#39;s description, if set to &#x60;false&#x60; (by default), it won&#39;t (Non-IaC projects only) | [optional] 
**include_introduced_through** | **bool** | If set to &#x60;true&#x60;, Include issue&#39;s introducedThrough, if set to &#x60;false&#x60; (by default), it won&#39;t. It&#39;s for container only projects (Non-IaC projects only) | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues_request import ListAllAggregatedIssuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssuesRequest from a JSON string
list_all_aggregated_issues_request_instance = ListAllAggregatedIssuesRequest.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssuesRequest.to_json())

# convert the object into a dict
list_all_aggregated_issues_request_dict = list_all_aggregated_issues_request_instance.to_dict()
# create an instance of ListAllAggregatedIssuesRequest from a dict
list_all_aggregated_issues_request_from_dict = ListAllAggregatedIssuesRequest.from_dict(list_all_aggregated_issues_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


