# ListRowAccessPoliciesResponse

Response message for the ListRowAccessPolicies method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to request the next page of results. | [optional] 
**row_access_policies** | [**List[RowAccessPolicy]**](RowAccessPolicy.md) | Row access policies on the requested table. | [optional] 

## Example

```python
from openapi_client.models.list_row_access_policies_response import ListRowAccessPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRowAccessPoliciesResponse from a JSON string
list_row_access_policies_response_instance = ListRowAccessPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListRowAccessPoliciesResponse.to_json())

# convert the object into a dict
list_row_access_policies_response_dict = list_row_access_policies_response_instance.to_dict()
# create an instance of ListRowAccessPoliciesResponse from a dict
list_row_access_policies_response_from_dict = ListRowAccessPoliciesResponse.from_dict(list_row_access_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


