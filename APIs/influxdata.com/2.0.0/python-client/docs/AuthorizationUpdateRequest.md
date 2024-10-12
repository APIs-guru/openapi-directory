# AuthorizationUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the token. | [optional] 
**status** | **str** | If inactive the token is inactive and requests using the token will be rejected. | [optional] [default to 'active']

## Example

```python
from openapi_client.models.authorization_update_request import AuthorizationUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationUpdateRequest from a JSON string
authorization_update_request_instance = AuthorizationUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AuthorizationUpdateRequest.to_json())

# convert the object into a dict
authorization_update_request_dict = authorization_update_request_instance.to_dict()
# create an instance of AuthorizationUpdateRequest from a dict
authorization_update_request_from_dict = AuthorizationUpdateRequest.from_dict(authorization_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


