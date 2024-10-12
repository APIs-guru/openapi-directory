# AuthorizationServerGetDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[AuthorizationServerGetDefaultResponseDetailsInner]**](AuthorizationServerGetDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.authorization_server_get_default_response import AuthorizationServerGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerGetDefaultResponse from a JSON string
authorization_server_get_default_response_instance = AuthorizationServerGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerGetDefaultResponse.to_json())

# convert the object into a dict
authorization_server_get_default_response_dict = authorization_server_get_default_response_instance.to_dict()
# create an instance of AuthorizationServerGetDefaultResponse from a dict
authorization_server_get_default_response_from_dict = AuthorizationServerGetDefaultResponse.from_dict(authorization_server_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


