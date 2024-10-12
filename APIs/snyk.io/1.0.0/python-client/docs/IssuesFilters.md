# IssuesFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**IssuesFiltersFilters**](IssuesFiltersFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.issues_filters import IssuesFilters

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesFilters from a JSON string
issues_filters_instance = IssuesFilters.from_json(json)
# print the JSON string representation of the object
print(IssuesFilters.to_json())

# convert the object into a dict
issues_filters_dict = issues_filters_instance.to_dict()
# create an instance of IssuesFilters from a dict
issues_filters_from_dict = IssuesFilters.from_dict(issues_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


