# ProfilePermissions

Permissions the user has for this view (profile).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective** | **List[str]** | All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent web property. | [optional] [readonly] 

## Example

```python
from openapi_client.models.profile_permissions import ProfilePermissions

# TODO update the JSON string below
json = "{}"
# create an instance of ProfilePermissions from a JSON string
profile_permissions_instance = ProfilePermissions.from_json(json)
# print the JSON string representation of the object
print(ProfilePermissions.to_json())

# convert the object into a dict
profile_permissions_dict = profile_permissions_instance.to_dict()
# create an instance of ProfilePermissions from a dict
profile_permissions_from_dict = ProfilePermissions.from_dict(profile_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


