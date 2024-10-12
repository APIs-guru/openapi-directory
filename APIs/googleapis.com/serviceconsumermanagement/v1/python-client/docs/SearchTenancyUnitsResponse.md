# SearchTenancyUnitsResponse

Response for the search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token for large results. | [optional] 
**tenancy_units** | [**List[TenancyUnit]**](TenancyUnit.md) | Tenancy Units matching the request. | [optional] 

## Example

```python
from openapi_client.models.search_tenancy_units_response import SearchTenancyUnitsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchTenancyUnitsResponse from a JSON string
search_tenancy_units_response_instance = SearchTenancyUnitsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchTenancyUnitsResponse.to_json())

# convert the object into a dict
search_tenancy_units_response_dict = search_tenancy_units_response_instance.to_dict()
# create an instance of SearchTenancyUnitsResponse from a dict
search_tenancy_units_response_from_dict = SearchTenancyUnitsResponse.from_dict(search_tenancy_units_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


