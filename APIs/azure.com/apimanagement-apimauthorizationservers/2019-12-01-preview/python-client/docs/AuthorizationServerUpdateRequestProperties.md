# AuthorizationServerUpdateRequestProperties

External OAuth authorization server Update settings contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_endpoint** | **str** | OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2. | [optional] 
**client_id** | **str** | Client or app id registered with this authorization server. | [optional] 
**client_registration_endpoint** | **str** | Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced. | [optional] 
**client_secret** | **str** | Client or app secret registered with this authorization server. This property will not be filled on &#39;GET&#39; operations! Use &#39;/listSecrets&#39; POST request to get the value. | [optional] 
**display_name** | **str** | User-friendly authorization server name. | [optional] 
**grant_types** | **List[str]** | Form of an authorization grant, which the client uses to request the access token. | [optional] 

## Example

```python
from openapi_client.models.authorization_server_update_request_properties import AuthorizationServerUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerUpdateRequestProperties from a JSON string
authorization_server_update_request_properties_instance = AuthorizationServerUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerUpdateRequestProperties.to_json())

# convert the object into a dict
authorization_server_update_request_properties_dict = authorization_server_update_request_properties_instance.to_dict()
# create an instance of AuthorizationServerUpdateRequestProperties from a dict
authorization_server_update_request_properties_from_dict = AuthorizationServerUpdateRequestProperties.from_dict(authorization_server_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


