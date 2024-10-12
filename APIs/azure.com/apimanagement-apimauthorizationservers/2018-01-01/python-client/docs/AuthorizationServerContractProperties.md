# AuthorizationServerContractProperties

External OAuth authorization server settings Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_endpoint** | **str** | OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2. | 
**client_id** | **str** | Client or app id registered with this authorization server. | 
**client_registration_endpoint** | **str** | Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced. | 
**display_name** | **str** | User-friendly authorization server name. | 
**grant_types** | **List[str]** | Form of an authorization grant, which the client uses to request the access token. | 
**authorization_methods** | **List[str]** | HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional. | [optional] 
**bearer_token_sending_methods** | **List[str]** | Specifies the mechanism by which access token is passed to the API.  | [optional] 
**client_authentication_method** | **List[str]** | Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format. | [optional] 
**client_secret** | **str** | Client or app secret registered with this authorization server. | [optional] 
**default_scope** | **str** | Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values. | [optional] 
**description** | **str** | Description of the authorization server. Can contain HTML formatting tags. | [optional] 
**resource_owner_password** | **str** | Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password. | [optional] 
**resource_owner_username** | **str** | Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username. | [optional] 
**support_state** | **bool** | If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security. | [optional] 
**token_body_parameters** | [**List[TokenBodyParameterContract]**](TokenBodyParameterContract.md) | Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {\&quot;name\&quot; : \&quot;name value\&quot;, \&quot;value\&quot;: \&quot;a value\&quot;}. | [optional] 
**token_endpoint** | **str** | OAuth token endpoint. Contains absolute URI to entity being referenced. | [optional] 

## Example

```python
from openapi_client.models.authorization_server_contract_properties import AuthorizationServerContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerContractProperties from a JSON string
authorization_server_contract_properties_instance = AuthorizationServerContractProperties.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerContractProperties.to_json())

# convert the object into a dict
authorization_server_contract_properties_dict = authorization_server_contract_properties_instance.to_dict()
# create an instance of AuthorizationServerContractProperties from a dict
authorization_server_contract_properties_from_dict = AuthorizationServerContractProperties.from_dict(authorization_server_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


