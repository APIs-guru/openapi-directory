# IdentityProvidersListManagementInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Creation date-time | [optional] 
**provider_name** | **str** | The name of the identity provider type | [optional] 
**provider_user_id** | **str** | The external user id | [optional] 
**updated_at** | **str** | Last update date-time | [optional] 
**user_id** | **str** | The account id (UUID) | [optional] 

## Example

```python
from openapi_client.models.identity_providers_list_management_inner import IdentityProvidersListManagementInner

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProvidersListManagementInner from a JSON string
identity_providers_list_management_inner_instance = IdentityProvidersListManagementInner.from_json(json)
# print the JSON string representation of the object
print(IdentityProvidersListManagementInner.to_json())

# convert the object into a dict
identity_providers_list_management_inner_dict = identity_providers_list_management_inner_instance.to_dict()
# create an instance of IdentityProvidersListManagementInner from a dict
identity_providers_list_management_inner_from_dict = IdentityProvidersListManagementInner.from_dict(identity_providers_list_management_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


