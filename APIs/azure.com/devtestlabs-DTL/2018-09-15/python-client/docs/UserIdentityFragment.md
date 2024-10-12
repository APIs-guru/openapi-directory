# UserIdentityFragment

Identity attributes of a lab user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Set to the app Id of the client JWT making the request. | [optional] 
**object_id** | **str** | Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available. | [optional] 
**principal_id** | **str** | Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id. | [optional] 
**principal_name** | **str** | Set to the principal name / UPN of the client JWT making the request. | [optional] 
**tenant_id** | **str** | Set to the tenant ID of the client JWT making the request. | [optional] 

## Example

```python
from openapi_client.models.user_identity_fragment import UserIdentityFragment

# TODO update the JSON string below
json = "{}"
# create an instance of UserIdentityFragment from a JSON string
user_identity_fragment_instance = UserIdentityFragment.from_json(json)
# print the JSON string representation of the object
print(UserIdentityFragment.to_json())

# convert the object into a dict
user_identity_fragment_dict = user_identity_fragment_instance.to_dict()
# create an instance of UserIdentityFragment from a dict
user_identity_fragment_from_dict = UserIdentityFragment.from_dict(user_identity_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


