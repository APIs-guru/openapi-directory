# UndeleteRoleRequest

The request to undelete an existing role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **bytearray** | Used to perform a consistent read-modify-write. | [optional] 

## Example

```python
from openapi_client.models.undelete_role_request import UndeleteRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteRoleRequest from a JSON string
undelete_role_request_instance = UndeleteRoleRequest.from_json(json)
# print the JSON string representation of the object
print(UndeleteRoleRequest.to_json())

# convert the object into a dict
undelete_role_request_dict = undelete_role_request_instance.to_dict()
# create an instance of UndeleteRoleRequest from a dict
undelete_role_request_from_dict = UndeleteRoleRequest.from_dict(undelete_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


