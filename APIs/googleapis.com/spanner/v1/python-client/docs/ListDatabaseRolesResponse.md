# ListDatabaseRolesResponse

The response for ListDatabaseRoles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_roles** | [**List[DatabaseRole]**](DatabaseRole.md) | Database roles that matched the request. | [optional] 
**next_page_token** | **str** | &#x60;next_page_token&#x60; can be sent in a subsequent ListDatabaseRoles call to fetch more of the matching roles. | [optional] 

## Example

```python
from openapi_client.models.list_database_roles_response import ListDatabaseRolesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDatabaseRolesResponse from a JSON string
list_database_roles_response_instance = ListDatabaseRolesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDatabaseRolesResponse.to_json())

# convert the object into a dict
list_database_roles_response_dict = list_database_roles_response_instance.to_dict()
# create an instance of ListDatabaseRolesResponse from a dict
list_database_roles_response_from_dict = ListDatabaseRolesResponse.from_dict(list_database_roles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


