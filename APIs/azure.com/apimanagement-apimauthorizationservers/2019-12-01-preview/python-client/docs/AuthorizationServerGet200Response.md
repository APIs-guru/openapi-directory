# AuthorizationServerGet200Response

External OAuth authorization server settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AuthorizationServerListByService200ResponseValueInnerProperties**](AuthorizationServerListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_server_get200_response import AuthorizationServerGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerGet200Response from a JSON string
authorization_server_get200_response_instance = AuthorizationServerGet200Response.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerGet200Response.to_json())

# convert the object into a dict
authorization_server_get200_response_dict = authorization_server_get200_response_instance.to_dict()
# create an instance of AuthorizationServerGet200Response from a dict
authorization_server_get200_response_from_dict = AuthorizationServerGet200Response.from_dict(authorization_server_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


