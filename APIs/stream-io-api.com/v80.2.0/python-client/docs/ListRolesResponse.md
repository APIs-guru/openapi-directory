# ListRolesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**roles** | [**List[Role]**](Role.md) |  | 

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


