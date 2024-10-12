# IssueCountsFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**IssueCountsFiltersFilters**](IssueCountsFiltersFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.issue_counts_filters import IssueCountsFilters

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCountsFilters from a JSON string
issue_counts_filters_instance = IssueCountsFilters.from_json(json)
# print the JSON string representation of the object
print(IssueCountsFilters.to_json())

# convert the object into a dict
issue_counts_filters_dict = issue_counts_filters_instance.to_dict()
# create an instance of IssueCountsFilters from a dict
issue_counts_filters_from_dict = IssueCountsFilters.from_dict(issue_counts_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


