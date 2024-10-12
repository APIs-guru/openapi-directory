# CompaniesFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the company to filter on | [optional] 

## Example

```python
from openapi_client.models.companies_filter import CompaniesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of CompaniesFilter from a JSON string
companies_filter_instance = CompaniesFilter.from_json(json)
# print the JSON string representation of the object
print(CompaniesFilter.to_json())

# convert the object into a dict
companies_filter_dict = companies_filter_instance.to_dict()
# create an instance of CompaniesFilter from a dict
companies_filter_from_dict = CompaniesFilter.from_dict(companies_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


