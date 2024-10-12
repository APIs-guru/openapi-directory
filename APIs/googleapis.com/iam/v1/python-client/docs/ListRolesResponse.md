# ListRolesResponse

The response containing the roles defined under a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | To retrieve the next page of results, set &#x60;ListRolesRequest.page_token&#x60; to this value. | [optional] 
**roles** | [**List[Role]**](Role.md) | The Roles defined on this resource. | [optional] 

## Example

```python
from openapi_client.models.list_roles_response import ListRolesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRolesResponse from a JSON string
list_roles_response_instance = ListRolesResponse.from_json(json)
# print the JSON string representation of the object
print(ListRolesResponse.to_json())

# convert the object into a dict
list_roles_response_dict = list_roles_response_instance.to_dict()
# create an instance of ListRolesResponse from a dict
list_roles_response_from_dict = ListRolesResponse.from_dict(list_roles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


