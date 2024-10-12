# QueryGrantableRolesResponse

The grantable role query response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | To retrieve the next page of results, set &#x60;QueryGrantableRolesRequest.page_token&#x60; to this value. | [optional] 
**roles** | [**List[Role]**](Role.md) | The list of matching roles. | [optional] 

## Example

```python
from openapi_client.models.query_grantable_roles_response import QueryGrantableRolesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryGrantableRolesResponse from a JSON string
query_grantable_roles_response_instance = QueryGrantableRolesResponse.from_json(json)
# print the JSON string representation of the object
print(QueryGrantableRolesResponse.to_json())

# convert the object into a dict
query_grantable_roles_response_dict = query_grantable_roles_response_instance.to_dict()
# create an instance of QueryGrantableRolesResponse from a dict
query_grantable_roles_response_from_dict = QueryGrantableRolesResponse.from_dict(query_grantable_roles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


