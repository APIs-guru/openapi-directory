# AuthorizationServerListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AuthorizationServerListByServiceDefaultResponseError**](AuthorizationServerListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.authorization_server_list_by_service_default_response import AuthorizationServerListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerListByServiceDefaultResponse from a JSON string
authorization_server_list_by_service_default_response_instance = AuthorizationServerListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerListByServiceDefaultResponse.to_json())

# convert the object into a dict
authorization_server_list_by_service_default_response_dict = authorization_server_list_by_service_default_response_instance.to_dict()
# create an instance of AuthorizationServerListByServiceDefaultResponse from a dict
authorization_server_list_by_service_default_response_from_dict = AuthorizationServerListByServiceDefaultResponse.from_dict(authorization_server_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


