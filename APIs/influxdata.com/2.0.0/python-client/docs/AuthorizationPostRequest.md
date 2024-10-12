# AuthorizationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the token. | [optional] 
**status** | **str** | If inactive the token is inactive and requests using the token will be rejected. | [optional] [default to 'active']
**org_id** | **str** | ID of org that authorization is scoped to. | 
**permissions** | [**List[Permission]**](Permission.md) | List of permissions for an auth.  An auth must have at least one Permission. | 
**user_id** | **str** | ID of user that authorization is scoped to. | [optional] 

## Example

```python
from openapi_client.models.authorization_post_request import AuthorizationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationPostRequest from a JSON string
authorization_post_request_instance = AuthorizationPostRequest.from_json(json)
# print the JSON string representation of the object
print(AuthorizationPostRequest.to_json())

# convert the object into a dict
authorization_post_request_dict = authorization_post_request_instance.to_dict()
# create an instance of AuthorizationPostRequest from a dict
authorization_post_request_from_dict = AuthorizationPostRequest.from_dict(authorization_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


