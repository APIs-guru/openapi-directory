# GetIssueCountsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetIssueCountsRequestFilters**](GetIssueCountsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_issue_counts_request import GetIssueCountsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetIssueCountsRequest from a JSON string
get_issue_counts_request_instance = GetIssueCountsRequest.from_json(json)
# print the JSON string representation of the object
print(GetIssueCountsRequest.to_json())

# convert the object into a dict
get_issue_counts_request_dict = get_issue_counts_request_instance.to_dict()
# create an instance of GetIssueCountsRequest from a dict
get_issue_counts_request_from_dict = GetIssueCountsRequest.from_dict(get_issue_counts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


