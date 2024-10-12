# GetTestCountsRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_private** | **bool** | If set to &#x60;true&#x60;, only include tests which were conducted against private projects, if set to &#x60;false&#x60; only include tests which were conducted against public projects | [optional] 
**issues_prevented** | **bool** | If set to &#x60;true&#x60;, only include tests which prevented issues from being introduced, if set to &#x60;false&#x60; only include tests which did not prevent issues from being introduced | [optional] 
**orgs** | **object** | The list of org IDs to filter the results by | 
**projects** | **object** | The list of project IDs to filter issues by, max projects allowed is 1000 | [optional] 

## Example

```python
from openapi_client.models.get_test_counts_request_filters import GetTestCountsRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of GetTestCountsRequestFilters from a JSON string
get_test_counts_request_filters_instance = GetTestCountsRequestFilters.from_json(json)
# print the JSON string representation of the object
print(GetTestCountsRequestFilters.to_json())

# convert the object into a dict
get_test_counts_request_filters_dict = get_test_counts_request_filters_instance.to_dict()
# create an instance of GetTestCountsRequestFilters from a dict
get_test_counts_request_filters_from_dict = GetTestCountsRequestFilters.from_dict(get_test_counts_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


