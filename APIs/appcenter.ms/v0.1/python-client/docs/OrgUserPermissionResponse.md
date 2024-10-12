# OrgUserPermissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_id** | **str** | The unique id (UUID) of the org | 
**user_role** | **str** | The user role for the org | 

## Example

```python
from openapi_client.models.org_user_permission_response import OrgUserPermissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrgUserPermissionResponse from a JSON string
org_user_permission_response_instance = OrgUserPermissionResponse.from_json(json)
# print the JSON string representation of the object
print(OrgUserPermissionResponse.to_json())

# convert the object into a dict
org_user_permission_response_dict = org_user_permission_response_instance.to_dict()
# create an instance of OrgUserPermissionResponse from a dict
org_user_permission_response_from_dict = OrgUserPermissionResponse.from_dict(org_user_permission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


