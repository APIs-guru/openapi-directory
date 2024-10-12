# Authorization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the token. | [optional] 
**status** | **str** | If inactive the token is inactive and requests using the token will be rejected. | [optional] [default to 'active']
**created_at** | **datetime** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**links** | [**AuthorizationAllOfLinks**](AuthorizationAllOfLinks.md) |  | [optional] 
**org** | **str** | Name of the org token is scoped to. | [optional] [readonly] 
**org_id** | **str** | ID of org that authorization is scoped to. | 
**permissions** | [**List[Permission]**](Permission.md) | List of permissions for an auth.  An auth must have at least one Permission. | 
**token** | **str** | Passed via the Authorization Header and Token Authentication type. | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**user** | **str** | Name of user that created and owns the token. | [optional] [readonly] 
**user_id** | **str** | ID of user that created and owns the token. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization import Authorization

# TODO update the JSON string below
json = "{}"
# create an instance of Authorization from a JSON string
authorization_instance = Authorization.from_json(json)
# print the JSON string representation of the object
print(Authorization.to_json())

# convert the object into a dict
authorization_dict = authorization_instance.to_dict()
# create an instance of Authorization from a dict
authorization_from_dict = Authorization.from_dict(authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


