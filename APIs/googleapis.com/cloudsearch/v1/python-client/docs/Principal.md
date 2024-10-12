# Principal

Reference to a user, group, or domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_resource_name** | **str** | This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id}/groups/{ID} | [optional] 
**gsuite_principal** | [**GSuitePrincipal**](GSuitePrincipal.md) |  | [optional] 
**user_resource_name** | **str** | This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id}/users/{ID} | [optional] 

## Example

```python
from openapi_client.models.principal import Principal

# TODO update the JSON string below
json = "{}"
# create an instance of Principal from a JSON string
principal_instance = Principal.from_json(json)
# print the JSON string representation of the object
print(Principal.to_json())

# convert the object into a dict
principal_dict = principal_instance.to_dict()
# create an instance of Principal from a dict
principal_from_dict = Principal.from_dict(principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


