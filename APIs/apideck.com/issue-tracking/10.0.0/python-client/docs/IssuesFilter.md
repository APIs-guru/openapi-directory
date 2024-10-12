# IssuesFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee_id** | **str** | Only return tickets assigned to a specific user | [optional] 
**since** | **datetime** | Only return tickets since a specific date | [optional] 
**status** | **List[str]** | Filter by ticket status, can be &#x60;open&#x60;, &#x60;closed&#x60; or &#x60;all&#x60;. Will passthrough if none of the above match | [optional] [default to []]

## Example

```python
from openapi_client.models.issues_filter import IssuesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesFilter from a JSON string
issues_filter_instance = IssuesFilter.from_json(json)
# print the JSON string representation of the object
print(IssuesFilter.to_json())

# convert the object into a dict
issues_filter_dict = issues_filter_instance.to_dict()
# create an instance of IssuesFilter from a dict
issues_filter_from_dict = IssuesFilter.from_dict(issues_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


