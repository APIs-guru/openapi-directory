# AuthorizationPolicy

The authorization policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | [**List[PermissionTypes]**](PermissionTypes.md) | The permissions associated with the policy. | 
**policy_name** | **str** | Name of the policy. | [optional] [readonly] 
**primary_key** | **str** | Primary key associated with the policy. | [optional] 
**secondary_key** | **str** | Secondary key associated with the policy. | [optional] 

## Example

```python
from openapi_client.models.authorization_policy import AuthorizationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationPolicy from a JSON string
authorization_policy_instance = AuthorizationPolicy.from_json(json)
# print the JSON string representation of the object
print(AuthorizationPolicy.to_json())

# convert the object into a dict
authorization_policy_dict = authorization_policy_instance.to_dict()
# create an instance of AuthorizationPolicy from a dict
authorization_policy_from_dict = AuthorizationPolicy.from_dict(authorization_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


