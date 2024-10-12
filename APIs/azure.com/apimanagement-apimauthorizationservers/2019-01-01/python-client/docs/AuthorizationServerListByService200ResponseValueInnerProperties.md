# AuthorizationServerListByService200ResponseValueInnerProperties

External OAuth authorization server settings Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_endpoint** | **str** | OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2. | 
**client_id** | **str** | Client or app id registered with this authorization server. | 
**client_registration_endpoint** | **str** | Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced. | 
**display_name** | **str** | User-friendly authorization server name. | 
**grant_types** | **List[str]** | Form of an authorization grant, which the client uses to request the access token. | 

## Example

```python
from openapi_client.models.authorization_server_list_by_service200_response_value_inner_properties import AuthorizationServerListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerListByService200ResponseValueInnerProperties from a JSON string
authorization_server_list_by_service200_response_value_inner_properties_instance = AuthorizationServerListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
authorization_server_list_by_service200_response_value_inner_properties_dict = authorization_server_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of AuthorizationServerListByService200ResponseValueInnerProperties from a dict
authorization_server_list_by_service200_response_value_inner_properties_from_dict = AuthorizationServerListByService200ResponseValueInnerProperties.from_dict(authorization_server_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


