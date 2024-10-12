# AuthorizationServerListByService200Response

Paged OAuth2 Authorization Servers list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[AuthorizationServerListByService200ResponseValueInner]**](AuthorizationServerListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.authorization_server_list_by_service200_response import AuthorizationServerListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerListByService200Response from a JSON string
authorization_server_list_by_service200_response_instance = AuthorizationServerListByService200Response.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerListByService200Response.to_json())

# convert the object into a dict
authorization_server_list_by_service200_response_dict = authorization_server_list_by_service200_response_instance.to_dict()
# create an instance of AuthorizationServerListByService200Response from a dict
authorization_server_list_by_service200_response_from_dict = AuthorizationServerListByService200Response.from_dict(authorization_server_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


