# ListTenancyUnitsResponse

Response for the list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token for large results. | [optional] 
**tenancy_units** | [**List[TenancyUnit]**](TenancyUnit.md) | Tenancy units matching the request. | [optional] 

## Example

```python
from openapi_client.models.list_tenancy_units_response import ListTenancyUnitsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTenancyUnitsResponse from a JSON string
list_tenancy_units_response_instance = ListTenancyUnitsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTenancyUnitsResponse.to_json())

# convert the object into a dict
list_tenancy_units_response_dict = list_tenancy_units_response_instance.to_dict()
# create an instance of ListTenancyUnitsResponse from a dict
list_tenancy_units_response_from_dict = ListTenancyUnitsResponse.from_dict(list_tenancy_units_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


