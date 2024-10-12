# CompaniesSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Companies | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.companies_sort import CompaniesSort

# TODO update the JSON string below
json = "{}"
# create an instance of CompaniesSort from a JSON string
companies_sort_instance = CompaniesSort.from_json(json)
# print the JSON string representation of the object
print(CompaniesSort.to_json())

# convert the object into a dict
companies_sort_dict = companies_sort_instance.to_dict()
# create an instance of CompaniesSort from a dict
companies_sort_from_dict = CompaniesSort.from_dict(companies_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


